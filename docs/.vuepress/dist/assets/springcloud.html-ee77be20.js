import{_ as a,o as e,c as t,a as r}from"./app-7d6b3a6a.js";const n={},i=r('<h1 id="gateway-网关" tabindex="-1"><a class="header-anchor" href="#gateway-网关" aria-hidden="true">#</a> gateway 网关</h1><p>是一个基于Spring Boot、Spring WebFlux、Project Reactor构建的高性能网关，旨在提供简单、高效的API路由。Spring Cloud Gateway基于Netty运行</p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>请求路由 负载均衡 认证和授权 限流和熔断 跨域资源共享（CORS）处理 链路追踪：网关是实施链路追踪的理想位置，可以为进出的请求加上追踪标识。 缓存: 提供响应缓存功能，减少对后端微服务的请求次数，提升响应速度和减轻后端服务的负载</p><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>Gateway有两种客户端负载均衡器，LoadBalancerClientFilter和ReactiveLoadBalancerClientFilter。LoadBalancerClientFilter使用一个Ribbon的阻塞式LoadBalancerClient，Gateway建议使用ReactiveLoadBalancerClientFilter。 可以通过设置spring.cloud.loadbalancer.ribbon.enabled=false，切换到ReactiveLoadBalancerClientFilter。无论使用Ribbon还是LoadBalancer，在Route中配置的lb是一样的</p>',6),l=[i];function c(o,d){return e(),t("div",null,l)}const h=a(n,[["render",c],["__file","springcloud.html.vue"]]);export{h as default};
