const moment = require('moment'); //引用插件，使用前需要在项目目录下使用yarn add moment 下载
const secret = require("./secret")

module.exports ={              //这里是插件，别放进themeConfig里面，以前的插件形式为babel形式，现改为对象的形式，注意区别
    '@vuepress/last-updated':{
      transformer: (timestamp, lang) => {
                                            
        moment.locale(lang)                 // 不要忘了安装 moment
        // moment.locale("zh-cn");             //可以将英文转化为中文，使用时请禁用上一条代码，并删除lang
        return moment(timestamp).format("LLLL")  //其他格式请去moment官网寻找
      }
    }, 
    '@vuepress/pwa':{                        //pwa配置什么的请参考教程，具体是需要manifest.json文件
      serviceWorker: true,                   //可通过网上的生成器生成，注意各参数的即可
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    '@vssue/vuepress-plugin-vssue': {       //记得安装这个插件
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'sthingtoeat',                 //你github的名
      repo: 'A-blog',                       //你这个项目的仓库名
      clientId: secret.clientId,
      clientSecret: secret.clientSecret, //这东西只生成一次，忘记了就得重置
      autoCreateIssue:true,                 //自动创建评论(create issue)，不用手点了
    },
    '@vuepress/back-to-top':true,           //yarn add -D @vuepress/plugin-back-to-top
    '@vuepress/medium-zoom': {
      selector: 'img.custom', //img往后可加类名
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {    //这里改css样式
      
      }
    },
    "vuepress-plugin-auto-sidebar":{//这个插件使用请参考:https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#%E6%A6%82%E8%A7%88
      title:{
        map:{
          "/studynote/":"学习笔记",//两边都有斜杠，不要漏掉
          "/diary/":"奇奇怪怪的事"
        }
      }
    },
  }