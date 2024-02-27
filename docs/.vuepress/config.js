const moment = require('moment'); //引用插件，使用前需要在项目目录下使用yarn add moment 下载

module.exports = {
  // base: "/A-blog/",           //主页地址不再是默认的localhost:8080,而是localhost:8080/A-blog/,如果部署到自定义域名则删除这一行
  title: "Haruka的博客",    //导航栏上的标题
    description: "写个博客记录生活",  //以mata标签被渲染到html中head的标签内
    head: [
      ['link', {rel: 'icon', href: '/favicon.ico'}],      //网站icon,地址默认为public
      ['meta', {name: 'author', content: '香饽饽仙贝'}],
      ['meta', {name: 'keywords', content: '学习vuepress'}],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/icon512_rounded.png' }],              //这里的地址
      ['link', { rel: 'mask-icon', href: '/icons/icon512_maskable.png', color: '#3eaf7c' }],  //还有这里都需要有文件才行
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],//这里好像不用
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: {              //这里是插件，别放进themeConfig里面，以前的插件形式为babel形式，现改为对象的形式，注意区别
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
        '@vssue/vuepress-plugin-vssue': {
          // 设置 `platform` 而不是 `api`
          platform: 'github-v4',
    
          // 其他的 Vssue 配置
          owner: 'sthingtoeat',                 //你github的名
          repo: 'A-blog',                       //你这个项目的仓库名
          clientId: '4e7f48211858da0895e9',
          clientSecret: 'f728ac46b50aaa4dc0b4e39dfc23d9c7c10823e1', //这东西只生成一次，忘记了就得重置
          autoCreateIssue:true,                 //自动创建评论(create issue)，不用手点了
        },
      },
    themeConfig: {
      lastUpdated: 'updateDate',        //以git上传的时间为标准,但是格式改不了，需要插件
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: '介绍', link: '/introduce/about' },
        { text: '日记', link: '/diary/diary1' },
        { text: 'External', link: 'https://video.gincode.icu' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ],
      // sidebar: [            //让全局的侧边栏变成下面这种形式（不管哪个页面看见的都是这样）
      //   "",                  
      //   "introduce/about",
      //   "introduce/test",
      //   {                   //侧边栏分组
      //     title: '学习记录',   // 必要的
      //     path: '/studynote/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,子组是否折叠
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //     '/studynote/note1',
      //     '/studynote/note2',
      //     '/studynote/note3'
      //   ]
      //   }
      // ]
      sidebar:{           //不同页面有不同的侧边栏，就用这种形式
        '/introduce/': [
          '',             //introduce文件夹内的README.md文件
          'about',
          'test',
        ],
        '/studynote/': [
          'note1',
          'note2',
          'note3',
        ],
        '/diary/': [
          'diary1',
        ],
        '/': [
          '',
          'index1',
          'index2'
        ]
      }
    }
  }
