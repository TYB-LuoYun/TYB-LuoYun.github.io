import{_ as e,o as n,c as o,b as t}from"./app-28e0c0dd.js";const l={},s=t("blockquote",null,[t("p",null,"简介")],-1),a=t("p",null,"在 spark 的世界观中，一切都是由批次组成的，离线数据是一个大批次，而实时数据是由一个一个无限的小批次组成的。",-1),i=t("p",null,"Spark是以时间驱动的，当数据源有数据的数据就处理数据，如果没有数据的话，Spark依然会进行数据处理，只不过没有数据罢了",-1),c=t("p",null,"而在 flink 的世界观中，一切都是由流组成的，离线数据是有界限的流，实时数据是一个没有界限的流，这就是所谓的有界流和无界流。",-1),_=t("p",null,"flink是事件驱动，就是一条一条的数据，Flink将读取过来的数据封装成了一个Event，来一条处理一条，来一条处理一条。当源头有数据的时候就进行计算，没有数据的时候就不计算，就停了，不浪费资源。这也是跟Spark最大的一个区别",-1),r=t("p",null,"应用 Flink 的行业：",-1),k=t("p",null,"电商和市场营销 数据报表、广告投放 物联网（IOT） 传感器实时数据采集和显示、实时报警，交通运输业 物流配送和服务业 订单状态实时更新、通知信息推送、电信业基站流量调配 银行和金融业 实时结算和通知推送，实时检测异常行为",-1),u=t("p",null,"Flink中提供了3个组件，包括DataSource、Transformation和DataSink",-1),d=t("p",null,"1.DataSource：表示数据源组件，主要用来接收数据，目前官网提供了readTextFile、socketTextStream、fromCollection以及一些第三方的Source。 2.Transformation：表示算子，主要用来对数据进行处理，可以将数据流转换成另一个数据流或者聚合成一个数据流，转换算子可以将一个数据流转换成另一个数据流，聚合算子则可以将多个数据流聚合成一个数据流。常用的算子有map、filter、flatMap、keyBy、reduce、window等。这些算子可以被组合在一起形成复杂的数据处理任务 3.DataSink：表示输出组件，主要用来把计算的结果输出到其他存储介质中，比如writeAsText以及Kafka、Redis、Elasticsearch等第三方Sink组件。",-1),p=[s,a,i,c,_,r,k,u,d];function f(h,m){return n(),o("div",null,p)}const x=e(l,[["render",f],["__file","Flink.html.vue"]]);export{x as default};
