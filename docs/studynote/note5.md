---
title: 部署项目到你的服务器
---

## 准备工作

1.首先你需要一台云服务器，最好是Linux的，可以选择CentOs或者Ubutun

2.可以买一个便宜的域名，用于地址解析。

## 配置服务器的免密登录

::: tip 免密登录究极概括版
本地:
ssh-keygen #生成公钥私钥

ssh-copy-id qly@xxx.xxx.xxx.xxx #服务器需要有qly这个用户
输完密码即可
:::

### 1.进入你的服务器

输入

```sh
ssh root@xxx.xxx.xxx.xxx     #进入你的服务器，xxx.xxx.xxx.xxx是你服务器的公网IP
```

::: tip 提示
第一次登录会有如下提示：

`The authenticity of host '123.57.47.211 (123.57.47.211)' can't be established.
ECDSA key fingerprint is SHA256:iy237yysfCe013/l+kpDGfEG9xxHxm0dnxnAbJTPpG8.
Are you sure you want to continue connecting (yes/no/[fingerprint])?`

这时输入yes，回车即可，服务器信息会被记录在~/.ssh/known_hosts文件中（这是在你的本地电脑里，而非云服务器）
:::

默认登录端口号为22。如果想登录某一特定端口：
```sh
ssh user@hostname -p 22
```

### 2.创建一个新的用户

root用户权限较大，容易不小心删库,root用户如果删库了，服务器大概没救了。

::: warning 注意
现在是在你的云服务器里
:::

输入以下指令
```sh
adduser xxx    #创建一个用户，xxx是你的新用户名,输完以后看提示然后设置密码
usermod -aG sudo xxx     #给你这个新的用户分配sudo权限,回车以后无任何提示
```

### 3.配置映射信息（可以跳过）
打开git bash，输入以下指令
```sh
cd ~/.ssh   #进入.ssh文件
vim config  #浏览文件config
```
在config文件里面先不要轻举妄动，按`i`键，可以进入输入模式,输入以下指令（手打）
`Host`后面的是给你的服务器取的任意名字,`HostName` 后面则是服务器公网IP,`User`后面则是你的新用户名

```vim
Host space              
    HostName xxx.xxx.xxx.xxx
    User qly
```
输入完毕以后，按下ESC退出输入模式，再按`Shift + :`输入wq,即可退出vim。

### 4.把公钥传给服务器
在你的本地机器输入以下指令，值得注意的是，请把qly换成**你设置的用户名**。
```sh
ssh-copy-id space #如果你跳过了上面的第三步，则把space换成qly@xxx.xxx.xxx.xxx的形式
```
回车完以后再输一遍你的密码即可

::: tip 提示
显示如下即为成功

`Now try logging into the machine, with:   "ssh 'space'"
and check to make sure that only the key(s) you wanted were added.`
:::
到这里为止,用户名qly已经可以免密登录了。

## 安装tmux和docker镜像
### 1.安装tmux

进入你的服务器(qly用户)，输入以下指令(shift + insert可进行粘贴)
```sh
sudo apt-get update #更新apt包索引,回车以后输入密码即可

sudo apt-get install tmux   #安装tmux,tmux可防止意外关闭而终结进程，也可以防止挂机时间过长而断开服务器连接
```

输入

```
tmux
```

即可进入tmux界面,`CTRL + D` 可以退出tmux界面

### 2.安装docker

::: warning 注意
如果你之前安装过docker,请先卸载它。根据下面的文档执行卸载操作，我相信你找得到的。
:::

根据不同的系统选择不同的[docker安装文档(英文)](https://docs.docker.com/engine/)

这里以ubuntu为例。

根据文档，首先创建docker仓库。进入tmux执行下列语句，使用shift + insert可粘贴到tmux
#### 添加docker官方GPG密钥
```sh
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```
输完密码以后进入下一步。
#### 设置稳定版仓库

```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### 安装Docker Engine-Community

输入
```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

输入y,等待下载完成即可。下载速度取决于你的服务器带宽，比较慢的话，可以选择**直接关闭**git窗口，它自己会在服务器里下载。若干时间以后，重新登录服务器，输入指令`tmux a`即可回归原来的界面。

下载完以后执行
```sh
docker images
```

若有信息提示，但是Permision deny则输入以下指令给docker sudo权限
```sh
sudo usermod -aG docker $USER
```
回车以后输入密码，完成以后不会有任何提示。这时退出tmux再退出服务器，重新登录一下服务器，再回到tmux，这时候再次输入
```sh
docker images
```
若显示
```
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```
则说明安装完成啦。


## 拉取一个基础镜像

镜像源有多个，docker官方那个巨慢无比，所以我们一般选择其他的。

### 修改镜像源

这里选择了[腾讯的镜像源](https://cloud.tencent.com/document/product/1207/45596)

进入你的服务器，可以在tmux界面，也可以不在（用户为qly）,输入

```sh
sudo vim /etc/docker/daemon.json
```
按i键进入输入模式，将以下内容粘贴进去
```json
{
   "registry-mirrors": [
   "https://mirror.ccs.tencentyun.com"
  ]
}
```
按ESC退出输入模式，输入:wq即可退出保存。如果你退不出去，就是说明你的权限不够，输入:qa!即可强行退出，但是没有保存文件，你需要在vim的前面加上sudo。

完事了以后输入这个,拉取ubuntu的基础镜像，想要其他版本的话自己看着调整。
```sh
docker pull ubuntu
```

完事了以后，输入`docker images`查看拉取的镜像。

## 使用镜像启动一个容器
```sh
docker run -it --network host --name blog ubuntu 
```

`--network host`意为容器使用服务器本机的网络，防止容器内部无法使用网络，`--name blog`后面是你随便取的一个名,这里取名为blog,ubuntu就是你拉的镜像的名，还有其他的设置，如有需要请先百度。

输完指令以后就会自动进入这个容器，

