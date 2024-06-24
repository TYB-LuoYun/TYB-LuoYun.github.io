import{_ as e,o as a,c as r,a as i}from"./app-7e19bb6d.js";const o="/assets/image-20231108093534150-93b737ad.png",d="/assets/image-20231108094315352-8c446401.png",c="/assets/image-20240226153532376-6b02061f.png",t="/assets/image-20240226150253610-963dc0ac.png",h={},p=i('<h1 id="mq" tabindex="-1"><a class="header-anchor" href="#mq" aria-hidden="true">#</a> MQ</h1><h2 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文" aria-hidden="true">#</a> 八股文</h2><h3 id="使用mq的场景和好处" tabindex="-1"><a class="header-anchor" href="#使用mq的场景和好处" aria-hidden="true">#</a> 使用MQ的场景和好处</h3><p>服务间异步通信，顺序消费，流量削峰 ，定时延迟任务 好处: 服务间高度解耦,异步提高性能高 缺点: 系统可用性降低 系统引入的外部依赖越多，越容易挂掉 系统复杂度提高 硬生生加个 MQ 进来，你怎么保证消息没有重复消费？怎么处理消息丢失的情况？ 怎么保证消息传递的顺序性？问题一大堆。 一致性问题 A 系统处理完了直接返回成功了，人都以为你这个请求就成功了；但是问题是，要是 BCD 三个系统那里，BD 两个系统写库成功了，结果 C 系统写库失败了，咋整？你这数据就不一致 了。</p><h3 id="kafka、activemq、rabbitmq、rocketmq-都有什么区-别" tabindex="-1"><a class="header-anchor" href="#kafka、activemq、rabbitmq、rocketmq-都有什么区-别" aria-hidden="true">#</a> Kafka、ActiveMQ、RabbitMQ、RocketMQ 都有什么区 别？</h3><p>对于吞吐量来说<code>kafka和RocketMQ支撑高吞吐</code>，ActiveMQ和RabbitMQ比他们低一个数量级。 对于 延迟量来说<code>RabbitMQ是最低的</code> 高并发:RabbitMQ 最高，原因是它的实现语言是天生具备高并发高可用的erlang 语言。</p><p>注:高吞吐量指的是系统能够快速处理大量请求的能力，也就是处理更多的请求数量。==&gt;处理请求速度快和多。 高并发指的是系统能够同时处理多个请求的能力，也就是处理更多的同时发生的请求数 ==&gt;同时处理请求数多不保证快。 一个高吞吐量的系统可以快速处理大量请求，但并不能同时处理很多请求；而一个高并发的系统则可以同时处理多个请求，但每个请求的处理速度可能较慢。</p><h3 id="如何保证高可用的" tabindex="-1"><a class="header-anchor" href="#如何保证高可用的" aria-hidden="true">#</a> 如何保证高可用的？</h3><p>比如RabbitMQ 有三种模式：单机模式、普通集群模式、 镜像集群模式。 1单机模式，就是 Demo 级别的，一般就是你本地启动了玩玩儿的?，没人生产用单机模式 2普通集群模式：多台机器上启动多个 RabbitMQ 实例。创建的 queue，只会放在一个 RabbitMQ 实例上，但是每个实例都同步 queue 的元数据;这方案主要是提高吞吐量的，就是说让集群中多个节点来服务某个 queue 的读写操作。 3镜像集群模式:高可用模式;每个 RabbitMQ 节点都有这个 queue 的一个完整镜像，包含 queue 的全部数据的意思,某个挂了也不要紧，</p><h3 id="死信队列-和-延迟队列" tabindex="-1"><a class="header-anchor" href="#死信队列-和-延迟队列" aria-hidden="true">#</a> 死信队列 和 延迟队列</h3><p>1死信就是无法被消费者正常消费的消息，（要保证业务数据的不丢失，就可以启用死信队列），当消息无法被消费，就由死信队列保存。 死信的原因:1消息过期;2消息队列满了;3消息被拒绝（消费者接收到消息但不处理，并显式地拒绝），（且没有重新入队，并且设置参数requeue = false，requeue为true的话表示消息重新进入队列，而不是死信）；4处理错误次数过多（消息传递和处理的尝试次数超过了设定的最大重试次数） 如果这个包含死信的队列配置了dead-letter-exchange属性，指定了一个交换机，那么队列中的死信就会投递到这个交换机中，而这个交换机称为 死信交换机（Dead Letter Exchange，检查DLX）。 一般会为 死信交换机 绑定一个队列，这样 死信交换机 里的消息就会投送到死信队列</p><p>实现方式:</p><ul><li>死信队列:指定一个死信交换机(就是正常的交换机但是被指定在队列被指定为死信了)和路由</li><li>普通交换机: 绑定死信队列</li><li>声明一个队列绑定 死信交换机 用于接收死信消息</li><li>声明一个队列绑定 普通交换机 用于接收消息 2延迟队列： 改造死信队列 插件</li></ul><h3 id="死信队列使用场景" tabindex="-1"><a class="header-anchor" href="#死信队列使用场景" aria-hidden="true">#</a> 死信队列使用场景</h3><p>死信队列通常是系统可靠性和健壮性设计的一部分，具有以下使用场景：</p><ol><li>错误隔离和异常处理 : 当消息处理失败时，这些消息会被路由到死信队列，将其从正常处理流程中隔离开。这样做可以避免单个或少数错误消息影响到其他消息的处理。</li><li>容错和延迟重试： 通过结合死信队列和延迟再处理的策略，系统能够尝试在某个时间点重新处理消息</li><li>避免消费者循环失败: 对于一些永远无法成功处理的消息，不断重试会造成资源的浪费。死信队列可避免这种循环失败，允许系统专注于可成功处理的消息</li><li>维持消息顺序：单个消息的失败不应该导致后续消息堵塞。这些失败消息可以临时存储到死信队列中，保证其他消息正常处理。</li></ol><h3 id="如何保证消息的可靠传输-如果消息丢了怎么办" tabindex="-1"><a class="header-anchor" href="#如何保证消息的可靠传输-如果消息丢了怎么办" aria-hidden="true">#</a> 如何保证消息的可靠传输？如果消息丢了怎么办</h3><p>保证消息不丢失，可靠抵达，可以使用事务消息，但性能下降250倍， 为此引入RabbitMQ的消息确认机制</p><ul><li>生产者丢失: 发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题 啥的; 可以再生产者那里设置开启 confirm 确认模式，生成id,回传一个ack消息</li><li>MQ中丢失： 开启 RabbitMQ 的持久化，就是消息写 入之后会持久化到磁盘</li><li>消费端丢失: 你消费的时候，刚消费到，还没处理，结果进程挂了，比如重启了，那么就尴尬; 用 RabbitMQ 提供的ack机制，简单来 说，就是你关闭 RabbitMQ 的自动ack，可以通过一个 api 来调用就行 如果你还没处理完，不就没有ack？那 RabbitMQ 就认为你还没处理完，这个时候 RabbitMQ 会把这个消费分配给别的 consumer 去处 理，消息是不会丢的。</li></ul><h3 id="防止重复消费" tabindex="-1"><a class="header-anchor" href="#防止重复消费" aria-hidden="true">#</a> 防止重复消费</h3><p>唯一消息ID: 为每个消息生成一个唯一的ID，当消费者接收到消息时，先检查该消息的ID，如果已经处理过，则直接丢弃。 （消息幂等性） 消息确认机制：当消费者成功处理消息后，发送一个消息确认给RabbitMQ，这样RabbitMQ就可以安全地删除该消息。</p><h3 id="如何保证消息的顺序性" tabindex="-1"><a class="header-anchor" href="#如何保证消息的顺序性" aria-hidden="true">#</a> 如何保证消息的顺序性</h3><p>顺序会错乱的场景：RabbitMQ：一个 queue，多个 consumer，这不明显乱了 一个queue对应一个消费者</p><h3 id="如何解决消息队列的延时以及过期失效问题-消息队列满了以-后该怎么处理-有几百万消息持续积压几小时-说说怎么解决" tabindex="-1"><a class="header-anchor" href="#如何解决消息队列的延时以及过期失效问题-消息队列满了以-后该怎么处理-有几百万消息持续积压几小时-说说怎么解决" aria-hidden="true">#</a> 如何解决消息队列的延时以及过期失效问题？消息队列满了以 后该怎么处理？有几百万消息持续积压几小时，说说怎么解决？</h3><p>消息积压处理办法：临时紧急扩容：</p><h3 id="交换机" tabindex="-1"><a class="header-anchor" href="#交换机" aria-hidden="true">#</a> 交换机</h3><p>点对点:Direct（直连交换机） 适合一对一的消息传递，将消息传递给与之绑定的队列，例如日志处理、任务分发等。 广播模式:扇型交换机(Fanout Exchange,消息会直接转发到绑定到它上面的所有队列)</p><p>而Topic（主题交换机）按照消息的一部分内容进行路由分发，例如新闻分类、消息过滤等 Headers（头交换机）根据消息的 header 属性进行匹配,适合一对一的消息传递，例如日志处理、任务分发等。适合非常复杂的路由规则场景，一般很少用到</p><h2 id="消息队列模式分类" tabindex="-1"><a class="header-anchor" href="#消息队列模式分类" aria-hidden="true">#</a> 消息队列模式分类</h2><h3 id="点对点" tabindex="-1"><a class="header-anchor" href="#点对点" aria-hidden="true">#</a> 点对点</h3><p>PTP点对点:使用queue作为通信载体</p><p>消息生产者生产消息发送到queue中，然后消息消费者从queue中取出并且消费消息。 Queue支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费。</p><p><img src="'+o+'" alt="image-20231108093534150"></p><h3 id="发布-订阅-广播broadcast" tabindex="-1"><a class="header-anchor" href="#发布-订阅-广播broadcast" aria-hidden="true">#</a> 发布/订阅（广播BROADCAST）</h3><p>Pub/Sub发布订阅（广播）：使用topic作为通信载体</p><p>消息生产者（发布）将消息发布到topic中(同一个topic的多个队列)，同时有多个消息消费者（订阅）消费该消息。和点对点方式不同，发布到topic的消息会被所有订阅者消费。</p><p><img src="'+d+'" alt="image-20231108094315352"></p><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p><strong>异步解耦</strong></p><p><strong>流量削峰</strong></p><p>每秒是很高的并发，这个时候如果我们的A系统，如果要将数据写入到我们的MYSQL中，受限于MYSQL本身服务的上限，最大我们只能每秒处理200请求，这个时候会有大量的消息进行堆积，从而导致A系统的奔溃。</p><p>对于每秒2000请求，消息中间件可以处理，然后A系统作为消息中间件的一个消费者，以固定的速度从MQ中拉取200个消息，完成我们的业务操作，<strong>用时间换空间</strong> 从而确保我们A系统的稳定性。</p><p><img src="'+c+'" alt="image-20240226153532376"></p><p><strong>数据分发</strong></p><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> rocketMq</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><ol><li><p>Producer : 消息发布的角色，支持分布式集群方式部署。Producer通过MQ的负载均衡模块选择相应的Broker集群队列进行消息投递，投递的过程支持快速失败并且低延迟。</p></li><li><p>Consumer :消息消费的角色，支持分布式集群方式部署。支持以push推，pul拉两种模式对消息进行消费。同时也支持集群方式和广播方式的消费，它提供实时消息订阅机制，可以满足大多数用户的票求。</p></li><li><p>NameServer: 服务与注册的发现中心。也是整个 RocketMQ 的“大脑”，所以 RocketMQ 需要先启动 <code>NameServer</code> 再启动 RocketMQ 中的 <code>Broker</code></p><p><code>NameServer</code> 是一个几乎无状态节点，可集群部署，节点之间无任何信息同步。<code>NameServer</code>底层由 Netty 实现，是内存式存储，所以 <code>NameServer</code> 中的 broker、topic不会持久化</p><p><code>NameServer</code> 其角色类似Dubbo和zookeeper，主要负责Broker的动态注册与发现。为什么不使用zookeeper？rocketmq主要是在分布式情况下使用追求性能，因为zookeeper最求最终一致性，所以在性能上会有所折扣。</p></li><li><p>BrokerServer : 消息服务器（<code>Broker</code>）是消息存储中心，主要作用是接收来自 <code>Producer</code> 的消息并存储，<code>Consumer</code> 从这里取得消息。存储与消息相关的元数据，包括用户组、消费进度偏移量、队列信息等。从部署结构图中可以看出 <code>Broker</code> 有 <code>Master</code> 和 <code>Slave</code> 两种类型， <strong><code>Master</code> 既可以写又可以读，<code>Slave</code> 不可以写只可以读。</strong></p><ul><li><p>单master模式： 一旦broker宕机，服务不可用，不建议线上</p></li><li><p>多master: 单个宕机无影响，异步刷盘丢失少量消息，同步刷盘不会丢。缺点是单台机器宕机期间，这台机器未消费的消息恢复之前不可订阅，消息实时性会被影响</p></li><li><p>多master多slave - 异步复制： HA采用异步复制，消息丢失少，实时性不会影响。缺点是master宕机，磁盘损坏的情况下丢失少量消息</p></li><li><p>多master多slave - 同步双写： 每个master配置一个slave，多对master-slave，HA采用同步双写。只有主备都写成功。才成功。优点：无延迟，服务和数据可用性很高，缺点是性能比异步复制模式低10%，发送单个消息的RT略高</p><p><strong>可靠性保证</strong></p><p>异步刷盘: 是指消息存入pagecache后就视为成功，返回应答。如果os crash消息有可能丢失。</p><p>同步刷盘:是指消息需要持久化到磁盘后才视为成功，返回应答</p><p>主从同步复制: 在高可用模式下，等Master和Slave均写 成功后才反馈给客户端写成功状态，如果主节点出现异常，从节点还有所有的数据。 主从异步复制: 在高可用模式下，等Master写成功后就反馈给客户端写成功状态般</p><blockquote><p>生产环境下，为了避免频繁刷盘导致性能下降，我们一般由主从的方式保证数据可靠性，开启异步刷盘和主从同步复制。</p></blockquote></li></ul></li></ol><h3 id="rocketmq-基本概念" tabindex="-1"><a class="header-anchor" href="#rocketmq-基本概念" aria-hidden="true">#</a> <strong>RocketMQ 基本概念</strong></h3><p><img src="'+t+'" alt="image-20240226150253610"></p><h4 id="分组-group" tabindex="-1"><a class="header-anchor" href="#分组-group" aria-hidden="true">#</a> 分组(Group)</h4><p>Group 分为两个部分 生产者和消费者</p><ul><li>生产者: 发送普通消息时，用于标识使用，没有特别的用处。 主要用来作用于事务消息，当事务消息中某条消息一直处于等待状态并超时，Broker会回查同一个Group下的其他producer，确定该消息是 commit 还是 rollback</li><li>消费者: 消费者的分组就非常有意义了，消费者是标识一类 <code>Consumer</code> 的集合名称，这类 <code>Consumer</code> 通常消费一类消息，且消费逻辑一致。同一个 <code>Consumer Group</code> 下的各个实例将共同消费 topic 的消息，起到负载均衡的作用。 消费进度以 <code>Consumer Group</code> 为粒度管理，不同 <code>Consumer Group</code> 之间消费进度彼此不受影响，即消息 A 被 <code>Consumer Group1</code> 消费过，也会再给 <code>Consumer Group2</code> 消费。</li></ul><h4 id="主体-topic" tabindex="-1"><a class="header-anchor" href="#主体-topic" aria-hidden="true">#</a> 主体(Topic)</h4><p>区分消息的种类，表示一类消息的逻辑名字，消息的逻辑管理单位，无论生产还是消费消息，都需要执行Topic。</p><p>一个发送者可以发送消息给一个或者多个Topic;</p><p>一个消息接受者可以订阅一个或多个Topic消息；</p><h4 id="消息队列-message-queue" tabindex="-1"><a class="header-anchor" href="#消息队列-message-queue" aria-hidden="true">#</a> 消息队列(Message Queue)</h4><p>简称 Queue ，消息物理管理单位。用来<code>并行发送和接收消息，相当于是Topic的分区</code>。</p><p>一个Topic会有若干个Queue，消息的生产一般会比消息消费的速度要快，消息进行消费的时会有对应的业务逻辑进行处理，这个时候就会降低消息消费的速度。所有<code>一般Topic会有若干个Queue。主要用来解决生产很快，消费很慢</code>。</p><p>如果同一个Topic创建在不同的Broker，那么不同的Broker有不同的Queue，将物理存储在不同的Broker节点之上，具有水平扩展的能力。无论是生产者还是消费者，实际的操作都是针对Queue级别。</p><h4 id="标签-tag" tabindex="-1"><a class="header-anchor" href="#标签-tag" aria-hidden="true">#</a> 标签（Tag）</h4><p>发送时给 topic 的消息设置 tag，用于同一主题下区分不同类型的消息</p><h4 id="偏移量-offset" tabindex="-1"><a class="header-anchor" href="#偏移量-offset" aria-hidden="true">#</a> 偏移量(Offset)</h4><p><code>Message queue</code> 是无限长的数组。一条消息进来下标就会涨 1，而这个数组的下标就是 offset。</p><h3 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h3><h4 id="分区选择" tabindex="-1"><a class="header-anchor" href="#分区选择" aria-hidden="true">#</a> 分区选择</h4><p>发送消息会落在那个MessageQueue上呢? 在默认的情况下消息发送会采取Round Robin轮询方式把消息发送到不同的queue(分区队列)，同时我们也可以在发送消息的时候去指定分区，或者指定一个分区算法。</p><h4 id="顺序消息" tabindex="-1"><a class="header-anchor" href="#顺序消息" aria-hidden="true">#</a> 顺序消息</h4><p>rocketMO可以保证单分区内的消息严格有席，顺序消息又包括分区有序和全局有序。分区有序比如同一个订单的创建，支付，发货等状态管理，我们希望其有序，可以自定义分区选择器，保证相同订单的消息发送到同一个分区中。如果想实现全局有序，我们需要将所有消息都发送到同一个分区队列中，也就是只用一个分区。</p><h4 id="延迟消息" tabindex="-1"><a class="header-anchor" href="#延迟消息" aria-hidden="true">#</a> 延迟消息</h4><p>延迟消息是指消息发送到broker后，不会立即被消费，等待特定时间投递给真正的topi。 延迟消息的原理: 在发送消息时，发现是延迟消息，就会替换topic，将消息暂存在名为SCHEDULE TOPIC XXXX的topic中，并根据delayTimeLevel存入特定的queue，queueld =delayTimeLeve -1，即一个queue只存相同延迟的消息，保证具有相同发送延迟的消息能够顶消费broker会调度地消费SCHEDULE TOPIC XXXX，将消息写入真实的topic.</p><h4 id="事务消息" tabindex="-1"><a class="header-anchor" href="#事务消息" aria-hidden="true">#</a> 事务消息</h4>',72),s=[p];function n(u,l){return a(),r("div",null,s)}const m=e(h,[["render",n],["__file","MQxiaoxiduilie.html.vue"]]);export{m as default};
