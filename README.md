# yeoman

自用的webapp配置文件及目录层级

## 功能

自动化前端， 功能包括： bootstrap、 less、 react

## 安装：

### 直接安装：


        npm install senasaikou-yeoman               
        
        
  在/node_modules/senasaikou-yeoman/app下进行开发
  
  </br>
  
  *ps:1、全大小约350M，所以很慢；2、在windows下无法复制，请妥善安排目录；3、因为淘宝的安装设计问题，不建议用cnpm；4、请尽量使用gitbash而非cmd*
  
  <br/>

### clone方法：
clone之后：

          cnpm install                                    //用的淘宝npm镜像（未安装可把所有的cnpm改为 npm）
          bower install

执行完后就可在app目录里进行开发。（即跳过下述过程的1-7步）      

  <br/>
  
**！！！注意：仔细查看index.html的文件引入格式（less文件引入时html中的后缀名为css，实际为less；react在html中后缀名为js，实际为jsx）**

  <br/>
  
## 原实现过程：

  1、安装 node
   
  2、安装 yeoman、 bower、 gulp:
  
           cnpm install -g yo bower gulp            

  3、安装yeoman的webapp插件：
          
           cnpm install -g generator-webapp
  
  4、建立webapp:
             
           yo webapp
           
  5、安装所用包：        
  
          bower install senasaikou     
           
           
   *此为自己的bower，包含less, bootstrap, jquery, react( [bower的github](https://github.com/Senasaikou/bower) )*
   
  <br />
  
  6、安装gulp中的less 以及 react
  
          cnpm install --save-dev gulp-babel babel-preset-es2015 babel-preset-react gulp-less
          
  7、修改gulpfile.js                                   
  
          因为改起来稍显杂直接拷贝此项目的文件拷贝就行(。_。)...，具体请参照最后的链接
  
   <br/>
   
  8、开启调试
          
          gulp serve
  9、生成项目
          
          gulp  
          
  <br/>
  
**over**

   <br/>
   
 ___
**关于 webapp更多的使用方法参照 [generator-webapp](https://github.com/yeoman/generator-webapp)**
