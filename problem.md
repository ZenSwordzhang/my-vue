# 问题集合 
## 问题1：Error: No PostCSS Config found 
### 解决1：
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





