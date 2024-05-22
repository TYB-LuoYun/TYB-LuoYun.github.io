import{_ as a,o as e,c as i,a as r}from"./app-9704a72c.js";const l={},d=r('<h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文" aria-hidden="true">#</a> 八股文</h1><h2 id="java内存结构" tabindex="-1"><a class="header-anchor" href="#java内存结构" aria-hidden="true">#</a> java内存结构</h2><p>1程序计数器:当前线程<code>所执行的字节码的行号指示器</code>，线程私有,正在执行的是Native方法，计数器值则为空 2虚拟机栈: 每个方<code>法被执行的时候都会同时创建一个栈帧</code>（Stack Frame）用于存储局部变量表、操作栈、动态链接、方法出口等信息 3本地方法栈: Native方法</p><p>4堆:存放对象实例，几乎所有的对象实例都在这里分配内存；新生代（ eden 和 survivor区(from-to)）、老年代 5元空间:以前永久代，是方法区的实现，也叫非堆，存储已被虚拟机加载的类元数据信息</p><h2 id="栈和堆的区别" tabindex="-1"><a class="header-anchor" href="#栈和堆的区别" aria-hidden="true">#</a> 栈和堆的区别</h2><p>栈是线程私有的，每个线程有一个栈内存，如果使用递归，栈很快就满了 栈内存用来存储基本类型的变量和对象的引用变量，堆内存用来存储Java中的对象，无论是成员变量，局部变量，还是类变量，它们指向的对象都存储在堆内存中 栈内存StackOverFlowError(s) 堆内存OutOfMemoryError(m) -Xss(stack)选项设置栈内存的大小； -Xms选项可以设置堆的开始时的大小</p><h2 id="gc回收" tabindex="-1"><a class="header-anchor" href="#gc回收" aria-hidden="true">#</a> GC回收</h2><p>最初的对象都分配在Eden(伊甸园)区,分配新对象的时候eden区内存不足，触发Minor GC 移动存活对象先去to,然后与from交换(采用复制回收算法，这两个区只有一个区有数据，避免碎片化的发生)，交换15次后经过了15次Minor GC 仍然存活的对象 会移动到老年 老年代空间不足,会触发Full GC(标记-清除算法).</p><h2 id="jvm调优" tabindex="-1"><a class="header-anchor" href="#jvm调优" aria-hidden="true">#</a> jvm调优</h2><p>JVM调优内容</p><ol><li>堆内存调优 调整JVM堆内存的大小，包括初始堆大小（-Xms参数）和最大堆大小（-Xmx参数） Minor GC执行时间不到50ms；执行不频繁，约10秒一次;Full GC执行时间不到1s；不低于10分钟1次；不用优化</li></ol><ul><li><p>针对JVM堆的设置，一般可以通过-Xms -Xmx限定其最小、最大值，为了防止垃圾收集器在最小、最大之间收缩堆而产生额外的时间，通常把最大、最小设置为相同的值;</p></li><li><p>.年轻代和年老代设置多大才算合理 （1）本着Full GC尽量少的原则，让年老代尽量缓存常用对象，JVM的默认比例1：2也是这个道理 。 （2）通过观察应用一段时间，看其他在峰值时年老代会占多少内存，在不影响Full GC的前提下，根据实际情况加大年轻代(大的年轻代会延长普通GC的周期，但会增加每次GC的时间)，比如可以把比例控制在1：1。但应该给年老代至少预留1/3的增长空间。</p></li><li><p>在配置较好的机器上（比如多核、大内存），可以为年老代选择并行收集算法： -XX:+UseParallelOldGC 。</p></li><li><p>线程堆栈的设置：每个线程默认会开启1M的堆栈，用于存放栈帧、调用参数、局部变量等，对大多数应用而言这个默认值太了，一般256K就足用。</p></li></ul><ol start="2"><li>垃圾回收调优 选择适当的垃圾回收器（GC）算法和参数，以最大限度地减少垃圾回收的停顿时间和提高吞吐量。常见的GC算法包括串行GC、并行GC和并发GC（如CMS、G1等）。</li><li>线程调优 调整JVM线程相关的参数，如线程栈大小、线程池大小等，</li><li>类加载调优 对类加载器进行调优，包括设置适当的类加载器层次结构、减少类加载的次数和提高加载速度。</li><li>JIT编译器调优 Java虚拟机的即时编译器（JIT）将热点代码编译成本地机器码，提高执行速度</li><li>I/O调优 对输入输出操作进行优化，包括使用合适的缓冲区大小、选择高效的I/O操作方式（如NIO）、优化文件和网络操作等</li><li>监控和分析 使用工具监控JVM的运行情况，如内存使用情况、垃圾回收情况、线程状态等，并进行性能分析，以找出性能瓶颈和优化的潜在点。</li></ol><h2 id="java四引用" tabindex="-1"><a class="header-anchor" href="#java四引用" aria-hidden="true">#</a> Java四引用</h2><p>强引用(不会回收)&gt;软引用(不足才回收)&gt;弱引用(发现就回收)&gt;虚引用(随时回收主要用来跟踪回收时会通知)</p>',15),t=[d];function o(h,c){return e(),i("div",null,t)}const n=a(l,[["render",o],["__file","jvm.html.vue"]]);export{n as default};
