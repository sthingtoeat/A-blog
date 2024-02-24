const moment = require('moment'); //引用插件，使用前需要在项目目录下使用yarn add moment 下载

module.exports = {
    title: "Haruka的博客",    //导航栏上的标题
    description: "写个博客记录生活",  //以mata标签被渲染到html中head的标签内
    head: [
      ['link', {rel: 'icon', href: '/favicon.ico'}],      //网站icon,地址默认为public
      ['meta', {name: 'author', content: '香饽饽仙贝'}],
      ['meta', {name: 'keywords', content: '学习vuepress'}]
    ],
    plugins: [              //这里是插件，别放进themeConfig里面
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
                                                
            moment.locale(lang)                 // 不要忘了安装 moment
            // moment.locale("zh-cn");             //可以将英文转化为中文，使用时请禁用上一条代码，并删除lang
            return moment(timestamp).format("LLLL")  //其他格式请去moment官网寻找
          }
        }
      ]
    ],
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
