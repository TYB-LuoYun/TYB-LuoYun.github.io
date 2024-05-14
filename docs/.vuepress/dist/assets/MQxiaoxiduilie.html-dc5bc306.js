import{_ as e,o as a,c as r,a as o}from"./app-28e0c0dd.js";const d="/assets/image-20231108093534150-93b737ad.png",c="/assets/image-20231108094315352-8c446401.png",i="/assets/image-20240226153532376-6b02061f.png",t="/assets/image-20240226150253610-963dc0ac.png",s={},p=o('<h1 id="mq" tabindex="-1"><a class="header-anchor" href="#mq" aria-hidden="true">#</a> MQ</h1><h2 id="消息队列模式分类" tabindex="-1"><a class="header-anchor" href="#消息队列模式分类" aria-hidden="true">#</a> 消息队列模式分类</h2><h3 id="点对点" tabindex="-1"><a class="header-anchor" href="#点对点" aria-hidden="true">#</a> 点对点</h3><p>PTP点对点:使用queue作为通信载体</p><p>消息生产者生产消息发送到queue中，然后消息消费者从queue中取出并且消费消息。 Queue支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费。</p><p><img src="'+d+'" alt="image-20231108093534150"></p><h3 id="发布-订阅-广播broadcast" tabindex="-1"><a class="header-anchor" href="#发布-订阅-广播broadcast" aria-hidden="true">#</a> 发布/订阅（广播BROADCAST）</h3><p>Pub/Sub发布订阅（广播）：使用topic作为通信载体</p><p>消息生产者（发布）将消息发布到topic中(同一个topic的多个队列)，同时有多个消息消费者（订阅）消费该消息。和点对点方式不同，发布到topic的消息会被所有订阅者消费。</p><p><img src="'+c+'" alt="image-20231108094315352"></p><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p><strong>异步解耦</strong></p><p><strong>流量削峰</strong></p><p>每秒是很高的并发，这个时候如果我们的A系统，如果要将数据写入到我们的MYSQL中，受限于MYSQL本身服务的上限，最大我们只能每秒处理200请求，这个时候会有大量的消息进行堆积，从而导致A系统的奔溃。</p><p>对于每秒2000请求，消息中间件可以处理，然后A系统作为消息中间件的一个消费者，以固定的速度从MQ中拉取200个消息，完成我们的业务操作，<strong>用时间换空间</strong> 从而确保我们A系统的稳定性。</p><p><img src="'+i+'" alt="image-20240226153532376"></p><p><strong>数据分发</strong></p><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> rocketMq</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><ol><li><p>Producer : 消息发布的角色，支持分布式集群方式部署。Producer通过MQ的负载均衡模块选择相应的Broker集群队列进行消息投递，投递的过程支持快速失败并且低延迟。</p></li><li><p>Consumer :消息消费的角色，支持分布式集群方式部署。支持以push推，pul拉两种模式对消息进行消费。同时也支持集群方式和广播方式的消费，它提供实时消息订阅机制，可以满足大多数用户的票求。</p></li><li><p>NameServer: 服务与注册的发现中心。也是整个 RocketMQ 的“大脑”，所以 RocketMQ 需要先启动 <code>NameServer</code> 再启动 RocketMQ 中的 <code>Broker</code></p><p><code>NameServer</code> 是一个几乎无状态节点，可集群部署，节点之间无任何信息同步。<code>NameServer</code>底层由 Netty 实现，是内存式存储，所以 <code>NameServer</code> 中的 broker、topic不会持久化</p><p><code>NameServer</code> 其角色类似Dubbo和zookeeper，主要负责Broker的动态注册与发现。为什么不使用zookeeper？rocketmq主要是在分布式情况下使用追求性能，因为zookeeper最求最终一致性，所以在性能上会有所折扣。</p></li><li><p>BrokerServer : 消息服务器（<code>Broker</code>）是消息存储中心，主要作用是接收来自 <code>Producer</code> 的消息并存储，<code>Consumer</code> 从这里取得消息。存储与消息相关的元数据，包括用户组、消费进度偏移量、队列信息等。从部署结构图中可以看出 <code>Broker</code> 有 <code>Master</code> 和 <code>Slave</code> 两种类型， <strong><code>Master</code> 既可以写又可以读，<code>Slave</code> 不可以写只可以读。</strong></p><ul><li><p>单master模式： 一旦broker宕机，服务不可用，不建议线上</p></li><li><p>多master: 单个宕机无影响，异步刷盘丢失少量消息，同步刷盘不会丢。缺点是单台机器宕机期间，这台机器未消费的消息恢复之前不可订阅，消息实时性会被影响</p></li><li><p>多master多slave - 异步复制： HA采用异步复制，消息丢失少，实时性不会影响。缺点是master宕机，磁盘损坏的情况下丢失少量消息</p></li><li><p>多master多slave - 同步双写： 每个master配置一个slave，多对master-slave，HA采用同步双写。只有主备都写成功。才成功。优点：无延迟，服务和数据可用性很高，缺点是性能比异步复制模式低10%，发送单个消息的RT略高</p><p><strong>可靠性保证</strong></p><p>异步刷盘: 是指消息存入pagecache后就视为成功，返回应答。如果os crash消息有可能丢失。</p><p>同步刷盘:是指消息需要持久化到磁盘后才视为成功，返回应答</p><p>主从同步复制: 在高可用模式下，等Master和Slave均写 成功后才反馈给客户端写成功状态，如果主节点出现异常，从节点还有所有的数据。 主从异步复制: 在高可用模式下，等Master写成功后就反馈给客户端写成功状态般</p><blockquote><p>生产环境下，为了避免频繁刷盘导致性能下降，我们一般由主从的方式保证数据可靠性，开启异步刷盘和主从同步复制。</p></blockquote></li></ul></li></ol><h3 id="rocketmq-基本概念" tabindex="-1"><a class="header-anchor" href="#rocketmq-基本概念" aria-hidden="true">#</a> <strong>RocketMQ 基本概念</strong></h3><p><img src="'+t+'" alt="image-20240226150253610"></p><h4 id="分组-group" tabindex="-1"><a class="header-anchor" href="#分组-group" aria-hidden="true">#</a> 分组(Group)</h4><p>Group 分为两个部分 生产者和消费者</p><ul><li>生产者: 发送普通消息时，用于标识使用，没有特别的用处。 主要用来作用于事务消息，当事务消息中某条消息一直处于等待状态并超时，Broker会回查同一个Group下的其他producer，确定该消息是 commit 还是 rollback</li><li>消费者: 消费者的分组就非常有意义了，消费者是标识一类 <code>Consumer</code> 的集合名称，这类 <code>Consumer</code> 通常消费一类消息，且消费逻辑一致。同一个 <code>Consumer Group</code> 下的各个实例将共同消费 topic 的消息，起到负载均衡的作用。 消费进度以 <code>Consumer Group</code> 为粒度管理，不同 <code>Consumer Group</code> 之间消费进度彼此不受影响，即消息 A 被 <code>Consumer Group1</code> 消费过，也会再给 <code>Consumer Group2</code> 消费。</li></ul><h4 id="主体-topic" tabindex="-1"><a class="header-anchor" href="#主体-topic" aria-hidden="true">#</a> 主体(Topic)</h4><p>区分消息的种类，表示一类消息的逻辑名字，消息的逻辑管理单位，无论生产还是消费消息，都需要执行Topic。</p><p>一个发送者可以发送消息给一个或者多个Topic;</p><p>一个消息接受者可以订阅一个或多个Topic消息；</p><h4 id="消息队列-message-queue" tabindex="-1"><a class="header-anchor" href="#消息队列-message-queue" aria-hidden="true">#</a> 消息队列(Message Queue)</h4><p>简称 Queue ，消息物理管理单位。用来<code>并行发送和接收消息，相当于是Topic的分区</code>。</p><p>一个Topic会有若干个Queue，消息的生产一般会比消息消费的速度要快，消息进行消费的时会有对应的业务逻辑进行处理，这个时候就会降低消息消费的速度。所有<code>一般Topic会有若干个Queue。主要用来解决生产很快，消费很慢</code>。</p><p>如果同一个Topic创建在不同的Broker，那么不同的Broker有不同的Queue，将物理存储在不同的Broker节点之上，具有水平扩展的能力。无论是生产者还是消费者，实际的操作都是针对Queue级别。</p><h4 id="标签-tag" tabindex="-1"><a class="header-anchor" href="#标签-tag" aria-hidden="true">#</a> 标签（Tag）</h4><p>发送时给 topic 的消息设置 tag，用于同一主题下区分不同类型的消息</p><h4 id="偏移量-offset" tabindex="-1"><a class="header-anchor" href="#偏移量-offset" aria-hidden="true">#</a> 偏移量(Offset)</h4><p><code>Message queue</code> 是无限长的数组。一条消息进来下标就会涨 1，而这个数组的下标就是 offset。</p><h3 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h3><h4 id="分区选择" tabindex="-1"><a class="header-anchor" href="#分区选择" aria-hidden="true">#</a> 分区选择</h4><p>发送消息会落在那个MessageQueue上呢? 在默认的情况下消息发送会采取Round Robin轮询方式把消息发送到不同的queue(分区队列)，同时我们也可以在发送消息的时候去指定分区，或者指定一个分区算法。</p><h4 id="顺序消息" tabindex="-1"><a class="header-anchor" href="#顺序消息" aria-hidden="true">#</a> 顺序消息</h4><p>rocketMO可以保证单分区内的消息严格有席，顺序消息又包括分区有序和全局有序。分区有序比如同一个订单的创建，支付，发货等状态管理，我们希望其有序，可以自定义分区选择器，保证相同订单的消息发送到同一个分区中。如果想实现全局有序，我们需要将所有消息都发送到同一个分区队列中，也就是只用一个分区。</p><h4 id="延迟消息" tabindex="-1"><a class="header-anchor" href="#延迟消息" aria-hidden="true">#</a> 延迟消息</h4><p>延迟消息是指消息发送到broker后，不会立即被消费，等待特定时间投递给真正的topi。 延迟消息的原理: 在发送消息时，发现是延迟消息，就会替换topic，将消息暂存在名为SCHEDULE TOPIC XXXX的topic中，并根据delayTimeLevel存入特定的queue，queueld =delayTimeLeve -1，即一个queue只存相同延迟的消息，保证具有相同发送延迟的消息能够顶消费broker会调度地消费SCHEDULE TOPIC XXXX，将消息写入真实的topic.</p><h4 id="事务消息" tabindex="-1"><a class="header-anchor" href="#事务消息" aria-hidden="true">#</a> 事务消息</h4>',45),h=[p];function n(u,l){return a(),r("div",null,h)}const g=e(s,[["render",n],["__file","MQxiaoxiduilie.html.vue"]]);export{g as default};
