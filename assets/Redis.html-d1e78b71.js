import{_ as e,o as a,c as d,a as i}from"./app-d461d336.js";const r={},s=i('<h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文" aria-hidden="true">#</a> 八股文</h1><h2 id="redis-数据类型" tabindex="-1"><a class="header-anchor" href="#redis-数据类型" aria-hidden="true">#</a> Redis 数据类型</h2><p>常用 String: 可以存储字符串、整数或浮点数，场景-缓存、计数器、分布式锁 List: 按照插入顺序存储一组有序的值， 可以在列表的头部或尾部添加或删除元素，如lpush，Lrange(返回列表中指定区间内的元素)，LPOP，场景-微信朋友圈点赞列表，要求按照点赞顺序显示点赞好友信息；粉丝关注列表 ；评论列表；消息队列(如用户发送的消息、任务分配) Hash:键值对的集合(HSET) 场景: 购物车(客户id作为key，商品id作为field,购买数量作为value)，存储高频访问的用户资料， 存储商品详情，文章或新闻的阅读量统计 Set: 无序的唯一值的集合，支持对集合执行添加（SADD）、删除和集合间的交集(SINTER)、并集(SUNION)、差集(SDIFF)等操作; 场景: 去重、共同好友等 Sorted Set也叫Zset： 有序集合，比Set多了个score分值（ZADD key score1 member1）。场景:排行榜，聊天室活跃度统计，各类资源网站TOP10</p><h2 id="缓存穿透-雪崩-击穿" tabindex="-1"><a class="header-anchor" href="#缓存穿透-雪崩-击穿" aria-hidden="true">#</a> 缓存穿透/雪崩/击穿</h2><p>击穿:单key突然过期，大量请求击穿redis访问Db。 解决:加锁只放行 + 自动刷新 穿透:单key 数据库无数据，不缓存 + 高并发。 解决: 存空值 + 布隆过滤 雪崩:多热点key同时过期 + 高并发. 解决: 过期时间错开 + db限流</p><h2 id="为什么-redis单线程模型效率也能那么高" tabindex="-1"><a class="header-anchor" href="#为什么-redis单线程模型效率也能那么高" aria-hidden="true">#</a> 为什么 Redis单线程模型效率也能那么高</h2><ol><li>C语言实现，效率高</li><li>纯内存操作</li><li>网络模型是基于非阻塞的IO复用模型机制，epoll是Linux提供的最新、最高效的I/O多路复用机制。 redis网络IO模型底层使用IO多路复用，通过reactor模式实现的。 Reactor是一种设计模式，它基于事件驱动。而IO多路复用，是操作系统提供的机制，IO多路复用可以同时监听多个IO事件 Redis6.0 版本之后,Redis 真正拥有了多线程模型（所谓的 I/O threading），这对应了主从Reactor多线程模型的Reactor设计模式。</li></ol><h3 id="redis网络模型" tabindex="-1"><a class="header-anchor" href="#redis网络模型" aria-hidden="true">#</a> redis网络模型</h3><p>redis使用IO多路复用简单来说就是，单线程处理多个客户端连接的网络读写请求，并且能够保证不会阻塞主流程的一种机制 由epoll实现,采用阻塞等待fd(文件描述符),网卡接收到数据时会回调(select,poll实现都需要轮询),优势在于减少非阻塞IO多次系统调用判断是否有数据</p><h3 id="redis-过期删除与内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-过期删除与内存淘汰" aria-hidden="true">#</a> Redis 过期删除与内存淘汰</h3><p>过期删除策略是「惰性删除+定期删除」这两种策略配和使用。 惰性删除策略的做法是，不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key 惰性删除策略的缺点：一个 key 已经过期，没有被访问，它所占用的内存就不会释放 需要定期删除减少了过期键对空间的无效占用</p><p>内存淘汰: noeviction(不驱逐) ： 默认策略，对于写请求直接返回错误，不进行淘汰。 volatile-ttl：越早过期的越优先被淘汰 allkeys-random: 从所有的key中随机淘汰。</p><p>allkeys-lru(Least Recently Used): 最近一段时间没有或很少用到的优先淘汰 allkeys-lfu(Least Frequently Used)： ，即访问频率很少的被淘汰 ，是一种缓存置换算法，当缓存被占满，这个时候继续往缓存里面添加数据，就需要淘汰一部分老的数据 volatile-lfu：从<code>设置了过期时间</code>的key中使用近似LFU算法进行淘汰</p><h3 id="redis如何实现持久化" tabindex="-1"><a class="header-anchor" href="#redis如何实现持久化" aria-hidden="true">#</a> Redis如何实现持久化</h3><p>RDB持久化：将某个时间点上Redis中的数据快照到磁盘 ， 默认15分钟触发一次 ，由于要保存整个数据集的状态所以每次执行耗费时间长大约 5 分钟 ，但是生成的快照文件较小，恢复速度快</p><h4 id="aof持久化" tabindex="-1"><a class="header-anchor" href="#aof持久化" aria-hidden="true">#</a> AOF持久化：</h4><p>日志型的实时持久化方式。开启AOF功能需要配置：appendonly yes，默认不开启。开启后默认每秒钟写入一次磁盘； AOF 写文件时，会先将数据写到缓冲区，然后再把缓冲区的内容写到磁盘，这个过程叫做 fsync ，其默认策略就是everysec；Redis采用了先执行命令，执行成功后，才记录AOF日志。这与MySQL等数据库不同，MySQL等数据库等有语法检查，可以避免记录错误的日志 AOF虽然备份时更加实时和精确，恢复速度较RDB慢，且文件需要定期进行重写，否则文件大小会无限制增长。 三种写回策略:</p><ul><li>Always策略：同步写回，每个命令执行完，立马同步的将命令写回磁盘，而且是主线程负责</li><li>Everysec策略：每秒写回，每个写命令执行完，只是先把日志写到AOF文件的内存缓存区，每隔一秒把缓冲区中的内容写回磁盘. 默认</li><li>NO策略：操作系统控制写回，每个写命令执行完，只是先把日志写到AOF文件缓存区，由操作系统决定何时将缓存区写入磁盘。</li></ul><h4 id="同时开启rdb和aof" tabindex="-1"><a class="header-anchor" href="#同时开启rdb和aof" aria-hidden="true">#</a> 同时开启RDB和AOF:</h4><p>在两次RDB快照期间用AOF来进行持久化，二者配合使用 在这种情况下当redis重启的时候会优先载入AOF文件来恢复原始的数据，因为在通常情况下AOF文件保存的数据集要比RDB文件保存的数据集要完整</p><h2 id="redis高可用架构" tabindex="-1"><a class="header-anchor" href="#redis高可用架构" aria-hidden="true">#</a> Redis高可用架构</h2><p>高可用一般来说有两个含义：一是数据尽量不丢失，二是保证服务尽可能可用 通常有三种部署模式：主从模式(主要是主从复制读写分离)，哨兵模式(解决主从模式主机宕机问题)，集群模式(哨兵模式没有解决master写数据的压力,实现分布式存储，每个节点存储不同的内容)</p>',22),h=[s];function l(t,n){return a(),d("div",null,h)}const o=e(r,[["render",l],["__file","Redis.html.vue"]]);export{o as default};
