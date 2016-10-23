# 自用的webapp配置文件及目录层级


# 功能

自动化前端， 功能包括： bootstrap、 less、 react

# 介绍

          cnpm install
          bower install

执行完上述操作后就可在app目录里进行开发。        

！！！注意：仔细查看index.html的文件引入格式（less文件引入时html中的后缀名为css，实际为less；react在html中后缀名为js，实际为jsx）

原本实现过程：

  1、安装 node
   
  2、安装 yeoman、 bower、 gulp:
  
           cnpm install -g yo bower gulp            //用的淘宝npm镜像（未安装可把所有的cnpm改为 npm）

  3、安装yeoman的webapp插件：
          
           cnpm install -g generator-webapp
  
  4、建立webapp:
             
           yo webapp
           
  5、安装bower：
          
           bower install senasaikou                   //此为自己的bower，包含less, bootstrap, jquery, react[bower的github](https://github.com/Senasaikou/bower)


gulp
