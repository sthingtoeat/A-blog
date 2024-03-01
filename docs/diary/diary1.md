## 日记1(测试)

1.去ac Terminal 里面 输入 
    ssh root@**.**	(公网ip地址)

2.成功进入服务器以后创建用户acs 
   输入
    adduser acs     
   然后设置密码
   设置完以后就一路回车，最后输入Y就可以了

3.给用户acs添加sudo权限
  输入 
    usermod -aG sudo acs
  控制台不会有任何反应，输入的时候需要注意是否输错

4.传AC Terminal的一些相关配置
   按CTRL + D 退回 或者 输入 logout
   会显示****.****.*** closed
   此时的状态是你刚刚建立的用户名 acs@*****:~$ 
   设置一个免密登录
   输入   		
    vim .ssh/config
   按i键切换为输入模式，然后在里面输入(按SHIFT + INSERT 可以进行粘贴)
    Host ****					//(随便设置一个名,用于免密登录的名)
    HostName *****			//(服务器公网ip地址) 
    User acs				//(你刚刚创建的用户名的名)
   按ESC退出输入模式
   输入			
    :wq
   保存并退出，返回到刚才进入config文件时的界面				
   输入                    
    ssh-copy-id ****        //（刚刚你在config里面设置的Host名）
   然后输入你acs用户的密码
   输完以后，显示Now try logging into the machine,with:"ssh '*******'" ...
   这时候免密登录设置就完成了
   退出（关了这个管理器）
   重新打开AC Terminal
   输入   
    scp .bashrc .vimrc .tmux.conf ****(你设置的Host名):     //这个冒号别忘了，然后回车
   会弹出下载完成的信息
   然后输入ssh ****（你设置的Host名）,如果登录成功了，说明免密登录正确了
   在服务器里面     （如果上面ssh登录测试完成了，那么就表示在服务器里面了）
   更新一下apt-get
   输入                    
    sudo apt-get update
   然后输入acs的密码
   会弹出一堆东西正在下载,等一会，看到....Done说明下载完了
   然后装一下tmux
   输入                     
    sudo apt-get install tmux
   显示 ...Done就好了
   输入                     
    tmux
   进入tmux             (按CTRL + D可以退出tmux)

5.配置docker
   打开网页https://docs.docker.com/engine/install/ubuntu/
   按照里面的步骤
   在tmux里面
   输入			  
    sudo apt-get update
   输入acs的密码
   等待下载完成
   ......Done 以后说明下载完成
   输入                      
    sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
   (这里的话，直接复制粘贴就可以了)
   
    输入                      
     sudo mkdir -m 0755 -p /etc/apt/keyringscurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    (一样复制粘贴，不要复制前面的空格)
    这里回车以后不会有任何信息弹出

    输入                      
     echo \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   这里回车以后也不会有任何信息弹出  

   输入                     
     sudo apt-get update
   更新一下
   输入                     
     sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   过会输入Y,然后等待就好了
   完事以后，输入    docker
   可以看到docker 的有关内容，说明安装成功了

6.给docker配置一下sudo权限
   (依然在tmux里面)
   输入 
    sudo usermod -aG docker $USER
   没有任何信息会弹出
   按CTRL + D , 退出tmux,
   再按CTRL+D , 退出服务器
   输入			ssh ****（HOST名）
   重新进入服务器
   输入                    tmux
   进入tmux
   输入                     docker images
   会有一行东西弹出  说明好了
   到此为止，docker安装完成

7.安装镜像(可以安装其他镜像，这里安装的是acwing里面的django镜像)
   直接关了AC Terminal
   然后重开
   输入			cd /var/lib/acwing/docker/images/
   进入这个文件夹
   输入			ls
   看一下这个文件夹里面有什么东西
   输入			scp django_lesson_1_0.tar *****(Host名):
   冒号别漏，冒号前面没有空格,然后等待完成
   AC Terminal先别关
   

8.在本地配置一遍这些东西
   打开git bash ，也可以直接去cmd命令行里面配置(可能操作会有点不一样？这里展示git bash)
   输入			cd
   来到家目录
   然后输入             cd .ssh
   如果显示没有这个文件，那么
   输入    		mkdir .ssh
   创建这个文件夹
   然后			cd .ssh
   进入这个文件夹
   输入			ssh-keygen.exe
   生成公钥密钥，一路回车
   完事之后
   输入 		ls
   能看到里面多出了 id_rsa     id_rsa.pub
   这两个文件
   
   输入           	vim config
   和之前在AC Terminal里面写的一样
   按i进入输入模式
   Host springboot_server
        HostName 39.107.72.164
        User acs
  
   然后按ESC退出输入模式
   按:键输入wq退出并保存
   
   输入			ssh-copy-id springboot_server
   设置一下免密登录
   yes一下 
   然后输入服务器密码

  输入			ssh springboot_server
  测试一下能不能登录
  登录以后
  输入			ls
  看看里面是不是多了一个django_lesson_1_0.tar的文件
   

9.解压docker镜像
   在刚刚传完djiango的东西以后
   输入			ssh springboot_server
   登录成功以后
   再输入		ls
   看看是否有django_lesson_1_0.tar
   输入			docker load -i django_lesson_1_0.tar
   等待解压完毕
   解压完毕之后
   输入			docker images
   可以看到刚刚解压了的docker镜像


10.让这个docker跑起来
    输入		docker run -p 20000:22 -p 443:443 -p 80:80 -p 3000:3000 -p 3001:3001 -p 3002:3002 -itd --name kob_server django_lesson:1.0
    --name后面是随便取的镜像的容器名
    回车以后不会有任何信息弹出

    输入		docker attach kob_server
    输入		cd
    回到家目录
    进入镜像的容器,把免密登录什么的各种操作再做一遍
    输入		adduser acs
    设置acs用户的密码，然后一路回车，那个Y输不输入好像没啥影响
    输入 usermod -aG sudo acs
    给acs赋予sudo权限，不会弹出任何信息
    挂载容器
    先按CTRL + P 然后再 CTRL + Q
    挂载完以后，CTRL + D退出容器和服务器就可以了
   
11.去服务器管理一下端口
     443 https端口 80 http端口  20000ssh登录端口,这几个都要开上

12.配置容器的免密登录
     关了AC Terminal，重开一遍
     输入		vim .ssh/config
     按i进入输入模式
     输入		Host springboot
        			HostName *****(服务器ip地址)
			User acs
			port 20000
     springboot_server是我们租的服务器，现在这个springboot是里面的虚拟服务器
     输入完毕以后按ESC退出输入模式
     输入		:wq
     退出，返回原来的界面
     输入		ssh-copy-id springboot
     给虚拟服务器配置免密登录
     输入yes然后输入服务器密码
     免密登录设置完成
     输入 ssh springboot 测试一下是否能够登录
     可以看到服务器镜像内容

13.在本地也配置一下虚拟服务器的免密登录
     输入		cd
     回到家目录
     然后输入		vim .ssh/config
     按i键进入输入模式
     输入		Host springboot
				HostName ****(服务器ip地址）
    				User acs
				Port 20000
     按ESC键退出输入模式
     然后输入:wq保存并退出	
     输入 ssh-copy-id springboot
     yes以后输入服务器密码就好了
     输入ssh springboot测试是否能够登录

14.去AC Terminal传一下祖传配置
     输入			scp .bashrc .vimrc .tmux.conf springboot:
     完事以后可以关了

15.安装mysql
    在本地git bash，
    输入			ssh springboot
    登录虚拟服务器
    输入			tmux
    进入tmux
    这里可以右键鼠标，先分一下屏
    （这里可以跳过）在tmux里面输入		sudo apt-get install mysql-server
    输完服务器密码以后，输入Y等待完成(安装失败了，没有更新软件安装列表)
    输入			sudo apt-get update
    更新一下软件安装列表
    然后再安装一次		
    输入			sudo apt-get install mysql-server
    输入Y以后等待完成，有一些报错但是不用管
    装完以后输入		sudo service mysql start
    启动mysql,显示OK以后
    输入top可以查看到mysqld和mysqld_safe说明启动成功了
    按q可以退出top界面
    输入			 sudo mysql -u root
    登录一下mysql
    输入			ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'qly123';
   											!!!!!!!!mysql密码必须和本地一致（当初找了半天）
    设置一下密码，后面那个分号别忘记,显示query Ok
    然后输入exit可以退出mysql
    输入			sudo mysql -u root -pqly123
    测试一下是否能够登录
    登录成功以后
    输入			show databases;
    分号,可以查询数据库
    输入			create database kob；
    创建数据库kob
    然后输入			use kob;
    使用kob这个数据库
    输入			show tables;
    可以查看当前数据库里面有什么表
    去idea，找到右边的database,右键tables，sql脚本，将DDL复制到剪贴板
    在你分屏的另一半tmux里面
    输入			vim create_table.sql
    创建并浏览
    在命令模式下输入	:set paste
    然后粘贴刚才从idea里面复制过来的sql语句
    按ESC进入命令模式，输入:wq保存并退出
    输入			pwd
    查询当前文件的路径,比如现在查出是/home/acs
    然后去左边的tmux里面，（此时的左边依然处在mysql）
    输入 			source /home/acs/create_table.sql;
    如果出现了报错，那么检查一下粘贴过来的sql代码是否有误
    如果出现三行Query Ok说明成功了.
    输入			exit
    退出mysql
    
16.安装jdk8
    输入			sudo apt-get install openjdk-8-jdk
    Y之后等待安装完成就可以了
    输入			java -version
    如果能查看到jdk版本说明安装成功了

17.完善项目，然后打包,启动（web还没打包）
    修改代码，比如地址的localhost要改成域名(具体看看视频39:10)

    打包完以后
    去各个target文件夹下面找到对应的jar包
    右键启动git bash
    输入			scp *****.jar springboot:
    把文件上传上去
    每个jar都得传
    这时候
    在服务器里面输入ls就能看到传上去的几个jar包
    为了方便管理分类，新建三个文件夹web    backendcloud   acapp
    把那些jar包放进backendcloud文件夹里面
    然后进入backendcloud文件夹
    分几个屏
    输入			java -jar *****.jar
    启动一个jar包
    然后把剩下的都启动了就可以了(注意是启动backendcloud文件夹里面的jar包，不是外面的)
    
18.配置nginx等事项
    复制acapp.key里面的东西
    在本地控制台的右侧分屏里面
    输入			cd /etc/nginx
    进入这个文件夹		
    输入			sudo mkdir cert
    创建cert这个文件夹，输入服务器密码
    输入			cd cert
    进入cert文件夹
    输入 			sudo vim acapp.key
    把复制的东西粘贴进去
    命令模式输入		:wq
    输入			sudo vim acapp.pem
    把网页acapp.pem里面的东西粘贴进去
    :wq保存退出
    输入			cd ..
    返回上一级目录
    然后输入			cd
    返回家目录
    输入			sudo cp .bashrc .vimrc .tmux.conf /root
    不会弹出任何提示信息
    输入			cd -
    返回之前的目录
    输入			sudo vim nginx.conf
    把里面的东西删完，
    打开acwing网页里面的那个springboot-nginx.conf复制里面的东西
    粘贴到nginx.conf里面
    :wq保存退出
    输入			sudo /etc/init.d/nginx start
    启动nginx			（如果修改nginx以后，需要输入sudo /etc/init.d/nginx reload重启）
    如果OK则启动完成
    如果Fail的话
    输入 			cd /var/log/nginx
    输入			sudo vim error.log
    看看是哪里的问题（好多次是因为复制的时候，第一行少了点东西导致的，检查一下那三个东西）
    完事之后nginx就算是配好了
    可以尝试一下打开这个连接，是403forbidden,说明成功了

19.打包前端
    把前端项目里的所有localhost:300*/这一串全部换成https://app4536.acapp.acwing.com.cn/api/
    然后去vue界面，build点击运行就可以了
    找到项目web，把里面的dist文件夹上传即可
    在git bash 里面输入	scp -r dist springboot:kob/web
    等待完成即可
    在虚拟服务器内部
    进入到kob/web
    输入			mv dist/* .
    把dist文件夹里面的东西拿出来到web里面( 因为nginx里面的地址只写到web为止，所以得拿出来)
    输入 			rm dist/ -r
    删除文件夹dist
    至此，大功告成
   

     