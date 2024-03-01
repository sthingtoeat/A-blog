module.exports=[
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
  ]
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