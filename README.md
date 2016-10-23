# 自用的webapp配置文件及目录层级


## 功能

自动化前端， 功能包括： bootstrap、 less、 react

## 介绍

          cnpm install
          bower install

执行完上述操作后就可在app目录里进行开发。        
  <br/>
  
**！！！注意：仔细查看index.html的文件引入格式（less文件引入时html中的后缀名为css，实际为less；react在html中后缀名为js，实际为jsx）**
  <br/>
  
##原本实现过程：

  1、安装 node
   
  2、安装 yeoman、 bower、 gulp:
  
           cnpm install -g yo bower gulp            //用的淘宝npm镜像（未安装可把所有的cnpm改为 npm）

  3、安装yeoman的webapp插件：
          
           cnpm install -g generator-webapp
  
  4、建立webapp:
             
           yo webapp
           
  5、安装bower：
          
           bower install senasaikou                   
           //此为自己的bower，包含less, bootstrap, jquery, react [bower的github](https://github.com/Senasaikou/bower)

  6、安装gulp中的less 以及 react
  
          npm install --save-dev gulp-babel babel-preset-es2015 babel-preset-react gulp-less
          
  7、修改gulpfile.js                                   
  
          //因为改起来太杂直接拷贝此项目的文件拷贝就行(。_。)...
  
   <br/>
  8、开启调试
          
          gulp serve
  9、生成项目
          
          gulp                                             
  <br/>
**over**
  <br/>
  **关于 webapp更多的使用方法参照 [generator-webapp](https://github.com/yeoman/generator-webapp)**
