module.exports =[
    ['link', { rel: 'icon', href: '/favicon.ico' }],      //网站icon,地址默认为public
    ['meta', { name: 'author', content: '香饽饽仙贝' }],
    ['meta', { name: 'keywords', content: '学习vuepress' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon512_rounded.png' }],              //这里的地址
    ['link', { rel: 'mask-icon', href: '/icons/icon512_maskable.png', color: '#3eaf7c' }],  //还有这里都需要有文件才行
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],//这里好像不用
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
]
