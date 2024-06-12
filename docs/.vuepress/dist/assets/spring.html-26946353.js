import{_ as e,o as r,c as a,e as t}from"./app-70d92285.js";const n={},i=t('<h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文" aria-hidden="true">#</a> 八股文</h1><h2 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc" aria-hidden="true">#</a> springmvc</h2><p>1.客户端请求提交到前端控制器DispatcherServlet 2.DispatcherServlet接收到请求后、将提交的信息交给处理器映射器(HandlerMapping) 3.HandlerMapping根据用户的url请求、匹配该url的Handler(Controller)，并返回一个执行链 4.DispatcherServlet调用HandlerAdapter(处理器适配器) 5.HandlerAdapter经过适配调用具体的处理器(Controller)扫描 6.Controller扫描完成后返回一个ModelAndView 7.HandlerAdapter将Controller扫描结果(ModelAndView)返回给DispatcherServlet 8.DispatcherServlet将ModelAndView请求试图解析器(ViewReslover)进行解析 9.ViewReslover解析后返回具体的View给前端控制器DispatcherServlet 10.DispatcherServlet将view进行渲染试图(即将模型数据填充到视图中) 11.DispatcherServlet将页面响应给个用户</p><h2 id="拦截器顺序问题" tabindex="-1"><a class="header-anchor" href="#拦截器顺序问题" aria-hidden="true">#</a> 拦截器顺序问题</h2><p>当preHandle方法返回true时，拦截器会按照preHandle -&gt; postHandle -&gt; afterCompletion的顺序执行； 多个拦截器顺序 @Order（int） int数越小，优先级越高</p><h2 id="拦截器过滤器区别" tabindex="-1"><a class="header-anchor" href="#拦截器过滤器区别" aria-hidden="true">#</a> 拦截器过滤器区别</h2><p>过滤器使用filter实现，拦截的是request请求，粒度很大 拦截器基于Java的jdk动态代实现的，实现HandlerInterceptor接口，粒度更小</p>',7),d=[i];function l(s,c){return r(),a("div",null,d)}const o=e(n,[["render",l],["__file","spring.html.vue"]]);export{o as default};
