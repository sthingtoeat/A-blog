const headConfig = require("./config/headConfig.js")  //引入headConfig.js文件
const pluginsConfig = require("./config/pluginsConfig.js")//./表示当前目录
const navConfig = require("./config/navConfig.js")
const sidebarConfig = require("./config/sidebarConfig.js")

module.exports = {
  // base: "/A-blog/",           //主页地址不再是默认的localhost:8080,而是localhost:8080/A-blog/,如果部署到自定义域名则删除这一行
  title: "Haruka的博客",    //导航栏上的标题
    description: "写个博客记录生活",  //以mata标签被渲染到html中head的标签内
    head: headConfig,
    plugins: pluginsConfig,
    themeConfig: {
      lastUpdated: 'updateDate',        //以git上传的时间为标准,但是格式改不了，需要插件
      logo: '/assets/img/logo.png',
      nav: navConfig,
      sidebar:sidebarConfig,
    }
  }
