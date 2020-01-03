# 问题集合 
## 问题1：Error: No PostCSS Config found 
### 解决1：
#### 方法1
* 安装postcss-pxtorem
    * cnpm i postcss-pxtorem -D
* vue.config.js中配置修改添加如下
-------------------
    postcss: {
        // options here will be passed to postcss-loader
        // 添加插件
        plugins: [
            // px转换为rem 需要cnpm i postcss-pxtorem -D
            require('postcss-pxtorem')({
                // 换算的基数
                rootValue: 100,
                // 忽略转换正则匹配项
                selectorBlackList: ['ab', 'bc'],
                propList: ['*'],
            }),
        ]
    }  
-------------------

## 问题2：optional install error: Package require os(darwin) not compatible with your platform(win32)
### 解决2：
#### 方法1
* cnpm rebuild node-sass
#### 方法2
* cnpm install node-sass

## 问题3：ReferenceError: resolve is not defined
### 解决3：
#### 方法1
* 在vue.config.js文件中添加
-------------------
    const path = require('path')
    
    function resolve (dir) {
        return path.join(__dirname, dir)
    }
-------------------
## 问题4：vue-cli-service' 不是内部或外部命令，也不是可运行的程序或批处理文件的报错
### 解决4：
#### 方法1
* 重新运行npm install
* 安装了淘宝镜像，可以运行cnpm install


