---
title: vuepress
---
## 写在前面

::: tip 提示
学习这个，你首先需要学习一下markdown语法，这个相对简单，调用vue组件时需要一些vue的知识
:::

推荐内容:

[一步步搭建 VuePress 及优化](https://www.bilibili.com/video/BV1vb411m7NY/?share_source=copy_web&vd_source=d333d9f76dc7f7c4895d5e00dc50ba8a)

[markdown语法](https://markdown.com.cn/intro.html)

[markdown的一些小组件,例如提示框](https://vuepress.yiov.top/guide/markdown.html#%E5%AE%B9%E5%99%A8)

[vuepress官网](https://vuepress.vuejs.org/zh/)

## 环境的搭建
```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

#### 1.下载