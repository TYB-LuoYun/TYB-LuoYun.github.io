const l=JSON.parse(`{"key":"v-de47a2a2","path":"/blogs/dashuju/Scrapypachongkuangjia.html","title":"Scrapy爬虫框架","lang":"en-US","frontmatter":{"title":"Scrapy爬虫框架","date":"2023/11/03","tags":["大数据"],"categories":["大数据"]},"headers":[{"level":2,"title":"windows和linux安装python2和python3","slug":"windows和linux安装python2和python3","link":"#windows和linux安装python2和python3","children":[]},{"level":2,"title":"python虚拟环境安装","slug":"python虚拟环境安装","link":"#python虚拟环境安装","children":[]},{"level":2,"title":"python虚拟环境管理工具","slug":"python虚拟环境管理工具","link":"#python虚拟环境管理工具","children":[]},{"level":2,"title":"在虚拟环境中安装项目","slug":"在虚拟环境中安装项目","link":"#在虚拟环境中安装项目","children":[{"level":3,"title":"安装scray","slug":"安装scray","link":"#安装scray","children":[]}]},{"level":2,"title":"scrapy与requests+beautifulsoup区别","slug":"scrapy与requests-beautifulsoup区别","link":"#scrapy与requests-beautifulsoup区别","children":[]},{"level":2,"title":"网页分类与爬虫作用","slug":"网页分类与爬虫作用","link":"#网页分类与爬虫作用","children":[]},{"level":2,"title":"正则","slug":"正则","link":"#正则","children":[]},{"level":2,"title":"字符串编码","slug":"字符串编码","link":"#字符串编码","children":[{"level":3,"title":"不同编码不同场景","slug":"不同编码不同场景","link":"#不同编码不同场景","children":[]},{"level":3,"title":"默认编码","slug":"默认编码","link":"#默认编码","children":[]},{"level":3,"title":"编码解码unicode | utf-8","slug":"编码解码unicode-utf-8","link":"#编码解码unicode-utf-8","children":[]}]},{"level":2,"title":"爬虫时的编码问题","slug":"爬虫时的编码问题","link":"#爬虫时的编码问题","children":[{"level":3,"title":"'gbk' codec can't encode character '\\\\xa0'","slug":"gbk-codec-can-t-encode-character-xa0","link":"#gbk-codec-can-t-encode-character-xa0","children":[]}]},{"level":2,"title":"深度优先和广度优先","slug":"深度优先和广度优先","link":"#深度优先和广度优先","children":[{"level":3,"title":"网站url树结构","slug":"网站url树结构","link":"#网站url树结构","children":[]},{"level":3,"title":"深度优先(递归算法实现)","slug":"深度优先-递归算法实现","link":"#深度优先-递归算法实现","children":[]},{"level":3,"title":"广度优先(队列算法实现)","slug":"广度优先-队列算法实现","link":"#广度优先-队列算法实现","children":[]}]},{"level":2,"title":"爬虫去重策略","slug":"爬虫去重策略","link":"#爬虫去重策略","children":[]},{"level":2,"title":"session与cookie","slug":"session与cookie","link":"#session与cookie","children":[]},{"level":2,"title":"http状态码","slug":"http状态码","link":"#http状态码","children":[]},{"level":2,"title":"scrapy库","slug":"scrapy库","link":"#scrapy库","children":[{"level":3,"title":"生成爬虫spider----继承scrapy.spider | scrapy genspider 任务名 域名","slug":"生成爬虫spider-继承scrapy-spider-scrapy-genspider-任务名-域名","link":"#生成爬虫spider-继承scrapy-spider-scrapy-genspider-任务名-域名","children":[]},{"level":3,"title":"运行爬虫任务|scrapy crawl 任务名","slug":"运行爬虫任务-scrapy-crawl-任务名","link":"#运行爬虫任务-scrapy-crawl-任务名","children":[]},{"level":3,"title":"对某url获取的内容快速调试","slug":"对某url获取的内容快速调试","link":"#对某url获取的内容快速调试","children":[]},{"level":3,"title":"main.js中代码运行爬虫任务","slug":"main-js中代码运行爬虫任务","link":"#main-js中代码运行爬虫任务","children":[]},{"level":3,"title":"Spider模块----爬虫解析","slug":"spider模块-爬虫解析","link":"#spider模块-爬虫解析","children":[]},{"level":3,"title":"Item模块(相当于pojo实体类)----将spider模块中的字段提取到Item中处理---可以定义多个实体类","slug":"item模块-相当于pojo实体类-将spider模块中的字段提取到item中处理-可以定义多个实体类","link":"#item模块-相当于pojo实体类-将spider模块中的字段提取到item中处理-可以定义多个实体类","children":[]},{"level":3,"title":"pipeline模块---对pojo处理---数据存储","slug":"pipeline模块-对pojo处理-数据存储","link":"#pipeline模块-对pojo处理-数据存储","children":[]}]},{"level":2,"title":"补充","slug":"补充-1","link":"#补充-1","children":[{"level":3,"title":"生成爬虫crawl----继承crawlSpider |scrapy genspider -t crawl 任务名 域名","slug":"生成爬虫crawl-继承crawlspider-scrapy-genspider-t-crawl-任务名-域名","link":"#生成爬虫crawl-继承crawlspider-scrapy-genspider-t-crawl-任务名-域名","children":[]},{"level":3,"title":"Request参数","slug":"request参数","link":"#request参数","children":[]},{"level":3,"title":"底层思路","slug":"底层思路","link":"#底层思路","children":[]},{"level":3,"title":"selector对象-抓取网页元素","slug":"selector对象-抓取网页元素","link":"#selector对象-抓取网页元素","children":[]}]},{"level":2,"title":"新建项目","slug":"新建项目","link":"#新建项目","children":[]},{"level":2,"title":"安装scrapy依赖","slug":"安装scrapy依赖","link":"#安装scrapy依赖","children":[]},{"level":2,"title":"新建scrapy工程","slug":"新建scrapy工程","link":"#新建scrapy工程","children":[]},{"level":2,"title":"pycharm导入项目","slug":"pycharm导入项目","link":"#pycharm导入项目","children":[]},{"level":2,"title":"pycharm给项目导入解释器","slug":"pycharm给项目导入解释器","link":"#pycharm给项目导入解释器","children":[]},{"level":2,"title":"新建一个爬虫|scrapy genspider 任务名 域名","slug":"新建一个爬虫-scrapy-genspider-任务名-域名","link":"#新建一个爬虫-scrapy-genspider-任务名-域名","children":[]},{"level":2,"title":"命令行运行爬虫任务|scrapy crawl 任务名","slug":"命令行运行爬虫任务-scrapy-crawl-任务名","link":"#命令行运行爬虫任务-scrapy-crawl-任务名","children":[]},{"level":2,"title":"禁止scrapy过滤不符合robot协议的url","slug":"禁止scrapy过滤不符合robot协议的url","link":"#禁止scrapy过滤不符合robot协议的url","children":[]},{"level":2,"title":"新建main.py调试运行爬虫任务","slug":"新建main-py调试运行爬虫任务","link":"#新建main-py调试运行爬虫任务","children":[]},{"level":2,"title":"spider模块 ----爬取文章整体思路","slug":"spider模块-爬取文章整体思路","link":"#spider模块-爬取文章整体思路","children":[]},{"level":2,"title":"item模块--items.py ----思路","slug":"item模块-items-py-思路","link":"#item模块-items-py-思路","children":[]},{"level":2,"title":"pipeline模块","slug":"pipeline模块","link":"#pipeline模块","children":[]},{"level":2,"title":"相关知识","slug":"相关知识","link":"#相关知识","children":[{"level":3,"title":"requests模块","slug":"requests模块","link":"#requests模块","children":[]}]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"1新建一个login.py","slug":"_1新建一个login-py","link":"#_1新建一个login-py","children":[]}]},{"level":2,"title":"在项目的虚拟环境中生成一个spider","slug":"在项目的虚拟环境中生成一个spider","link":"#在项目的虚拟环境中生成一个spider","children":[]},{"level":2,"title":"写splider","slug":"写splider","link":"#写splider","children":[]},{"level":2,"title":"scrapy突破反爬虫限制","slug":"scrapy突破反爬虫限制","link":"#scrapy突破反爬虫限制","children":[{"level":3,"title":"随机切换user-agent","slug":"随机切换user-agent","link":"#随机切换user-agent","children":[]},{"level":3,"title":"代理ip的设置","slug":"代理ip的设置","link":"#代理ip的设置","children":[]},{"level":3,"title":"验证码识别","slug":"验证码识别","link":"#验证码识别","children":[]}]},{"level":2,"title":"selenium（浏览器自动测试框架，可以在window下用）-动态网站抓取","slug":"selenium-浏览器自动测试框架-可以在window下用-动态网站抓取","link":"#selenium-浏览器自动测试框架-可以在window下用-动态网站抓取","children":[{"level":3,"title":"在项目的虚拟环境安装","slug":"在项目的虚拟环境安装","link":"#在项目的虚拟环境安装","children":[]},{"level":3,"title":"下载对应浏览器的driver","slug":"下载对应浏览器的driver","link":"#下载对应浏览器的driver","children":[]},{"level":3,"title":"selenimu入门案例","slug":"selenimu入门案例","link":"#selenimu入门案例","children":[]},{"level":3,"title":"结合selenium的模拟登陆","slug":"结合selenium的模拟登陆","link":"#结合selenium的模拟登陆","children":[]},{"level":3,"title":"selenimu模块","slug":"selenimu模块","link":"#selenimu模块","children":[]}]},{"level":2,"title":"phantomjs（无界面浏览器，可以在linux用）---已淘汰","slug":"phantomjs-无界面浏览器-可以在linux用-已淘汰","link":"#phantomjs-无界面浏览器-可以在linux用-已淘汰","children":[{"level":3,"title":"官网下载phantomjs","slug":"官网下载phantomjs","link":"#官网下载phantomjs","children":[]}]},{"level":2,"title":"selenium集成scrapy","slug":"selenium集成scrapy","link":"#selenium集成scrapy","children":[{"level":3,"title":"在middlewares.py中自定义一个类并在settingx.py配置执行顺序","slug":"在middlewares-py中自定义一个类并在settingx-py配置执行顺序","link":"#在middlewares-py中自定义一个类并在settingx-py配置执行顺序","children":[]}]},{"level":2,"title":"elasticsearch--企业级搜索引擎","slug":"elasticsearch-企业级搜索引擎","link":"#elasticsearch-企业级搜索引擎","children":[{"level":3,"title":"关系数据库缺点","slug":"关系数据库缺点","link":"#关系数据库缺点","children":[]},{"level":3,"title":"非关系数据库","slug":"非关系数据库","link":"#非关系数据库","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]}]},{"level":2,"title":"elasticsearch+scrapy----（可以用java代替哈）","slug":"elasticsearch-scrapy-可以用java代替哈","link":"#elasticsearch-scrapy-可以用java代替哈","children":[{"level":3,"title":"将爬取的数据放入elasticsearch中","slug":"将爬取的数据放入elasticsearch中","link":"#将爬取的数据放入elasticsearch中","children":[]}]},{"level":2,"title":"其余动态网页获取介绍","slug":"其余动态网页获取介绍","link":"#其余动态网页获取介绍","children":[{"level":3,"title":"phantomjs无界面已经过时的替代方案1（linux下）","slug":"phantomjs无界面已经过时的替代方案1-linux下","link":"#phantomjs无界面已经过时的替代方案1-linux下","children":[]}]},{"level":2,"title":"scrapy的暂停与重启","slug":"scrapy的暂停与重启","link":"#scrapy的暂停与重启","children":[]},{"level":2,"title":"其他不重要的","slug":"其他不重要的","link":"#其他不重要的","children":[{"level":3,"title":"scrapy url去重原理","slug":"scrapy-url去重原理","link":"#scrapy-url去重原理","children":[]},{"level":3,"title":"scrapy telnet---远程连接端口操作","slug":"scrapy-telnet-远程连接端口操作","link":"#scrapy-telnet-远程连接端口操作","children":[]},{"level":3,"title":"spider与middleware详解","slug":"spider与middleware详解","link":"#spider与middleware详解","children":[]},{"level":3,"title":"spider数据收集--存取一些spider信息","slug":"spider数据收集-存取一些spider信息","link":"#spider数据收集-存取一些spider信息","children":[]},{"level":3,"title":"scrapy信号","slug":"scrapy信号","link":"#scrapy信号","children":[]},{"level":3,"title":"scapy扩展开发","slug":"scapy扩展开发","link":"#scapy扩展开发","children":[]}]},{"level":2,"title":"分布式爬虫要点","slug":"分布式爬虫要点","link":"#分布式爬虫要点","children":[]},{"level":2,"title":"redis命令","slug":"redis命令","link":"#redis命令","children":[{"level":3,"title":"列表命令","slug":"列表命令","link":"#列表命令","children":[]},{"level":3,"title":"集合命令","slug":"集合命令","link":"#集合命令","children":[]}]},{"level":2,"title":"项目开发","slug":"项目开发","link":"#项目开发","children":[{"level":3,"title":"在项目虚拟环境中安装redis","slug":"在项目虚拟环境中安装redis","link":"#在项目虚拟环境中安装redis","children":[]},{"level":3,"title":"新建项目|scrapy startproject 项目名","slug":"新建项目-scrapy-startproject-项目名","link":"#新建项目-scrapy-startproject-项目名","children":[]},{"level":3,"title":"在github下载scrapy-redis并拷贝到项目","slug":"在github下载scrapy-redis并拷贝到项目","link":"#在github下载scrapy-redis并拷贝到项目","children":[]},{"level":3,"title":"新建spider继承RedisSpider","slug":"新建spider继承redisspider","link":"#新建spider继承redisspider","children":[]},{"level":3,"title":"逻辑上的修改","slug":"逻辑上的修改","link":"#逻辑上的修改","children":[]},{"level":3,"title":"分布式思路","slug":"分布式思路","link":"#分布式思路","children":[]},{"level":3,"title":"time对象|时间","slug":"time对象-时间","link":"#time对象-时间","children":[]},{"level":3,"title":"Url相关urllib库","slug":"url相关urllib库","link":"#url相关urllib库","children":[]},{"level":3,"title":"Os -路径相关","slug":"os-路径相关","link":"#os-路径相关","children":[]},{"level":3,"title":"hashlib库","slug":"hashlib库","link":"#hashlib库","children":[]},{"level":3,"title":"codecs --文件相关(能避免编码问题)","slug":"codecs-文件相关-能避免编码问题","link":"#codecs-文件相关-能避免编码问题","children":[]},{"level":3,"title":"json库","slug":"json库","link":"#json库","children":[]},{"level":3,"title":"MySQLdb -数据库","slug":"mysqldb-数据库","link":"#mysqldb-数据库","children":[]},{"level":3,"title":"正则re库","slug":"正则re库","link":"#正则re库","children":[]},{"level":3,"title":"python自带函数","slug":"python自带函数","link":"#python自带函数","children":[]},{"level":3,"title":"random","slug":"random","link":"#random","children":[]}]},{"level":2,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[{"level":3,"title":"环境搭建","slug":"环境搭建-1","link":"#环境搭建-1","children":[]},{"level":3,"title":"新建项目","slug":"新建项目-1","link":"#新建项目-1","children":[]},{"level":3,"title":"安装scrapy依赖","slug":"安装scrapy依赖-1","link":"#安装scrapy依赖-1","children":[]},{"level":3,"title":"新建scrapy工程","slug":"新建scrapy工程-1","link":"#新建scrapy工程-1","children":[]},{"level":3,"title":"导入项目","slug":"导入项目","link":"#导入项目","children":[]},{"level":3,"title":"新建一个爬虫|scrapy genspider 任务名 域名","slug":"新建一个爬虫-scrapy-genspider-任务名-域名-1","link":"#新建一个爬虫-scrapy-genspider-任务名-域名-1","children":[]},{"level":3,"title":"禁止scrapy过滤不符合robot协议的url","slug":"禁止scrapy过滤不符合robot协议的url-1","link":"#禁止scrapy过滤不符合robot协议的url-1","children":[]},{"level":3,"title":"命令行运行爬虫任务|scrapy crawl 任务名","slug":"命令行运行爬虫任务-scrapy-crawl-任务名-1","link":"#命令行运行爬虫任务-scrapy-crawl-任务名-1","children":[]},{"level":3,"title":"新建main.py调试运行爬虫任务","slug":"新建main-py调试运行爬虫任务-1","link":"#新建main-py调试运行爬虫任务-1","children":[]}]},{"level":2,"title":"项目流程","slug":"项目流程","link":"#项目流程","children":[{"level":3,"title":"配置userAgent代理，突破反爬虫限制，防止封Ip","slug":"配置useragent代理-突破反爬虫限制-防止封ip","link":"#配置useragent代理-突破反爬虫限制-防止封ip","children":[]},{"level":3,"title":"爬取内容-scrapy模块","slug":"爬取内容-scrapy模块","link":"#爬取内容-scrapy模块","children":[]},{"level":3,"title":"封装实体--item模块","slug":"封装实体-item模块","link":"#封装实体-item模块","children":[]},{"level":3,"title":"持久化实体到数据库-pipeline-模块","slug":"持久化实体到数据库-pipeline-模块","link":"#持久化实体到数据库-pipeline-模块","children":[]}]},{"level":2,"title":"OSError: raw write() returned invalid length 14 (should have been between 0 and 7)","slug":"oserror-raw-write-returned-invalid-length-14-should-have-been-between-0-and-7","link":"#oserror-raw-write-returned-invalid-length-14-should-have-been-between-0-and-7","children":[]},{"level":2,"title":"语句","slug":"语句","link":"#语句","children":[{"level":3,"title":"while循环","slug":"while循环","link":"#while循环","children":[]}]}],"git":{"createdTime":1698997525000,"updatedTime":1698997525000,"contributors":[{"name":"TYB-LuoYun","email":"92981594+TYB-LuoYun@users.noreply.github.com","commits":1}]},"filePathRelative":"blogs/大数据/Scrapy爬虫框架.md"}`);export{l as data};
