# 使用淘宝镜像全局安装cnpm 
* npm install -g cnpm --registry=https://registry.npm.taobao.org

# 全局安装vue 
* npm install -g @vue/cli

# 局部安装vue 
* npm install @vue/cli

# 查看版本 
* vue --version | vue -V

# 生成package.json文件 
* cnpm init --yes

# 启动图形化管理界面 
* vue ui
* [默认地址](http://localhost:8000/)

# 创建项目hello 
* vue create hello 
* 上下箭头键移动，空格键选择，回车键确认
* [手动配置](images/manually_select_features.jpg)
    1. Babel 主要是对es6语法转换成兼容的js （选上）
    1. TypeScript 支持使用TypeScript语法来编写代码
    1. PWA PWA 支持
    1. Router 支持vue路由配置插件（一般都会选择）
    1. Vuex 支持vue程序状态管理模式 * 一般都会选择
    1. CSS Pre-processors 支持css预处理器 （一般都会选择）
    1. Linter / Formatter 支持代码风格检查和格式化 （选上）
    1. Unit Testing 单元测试
    1. E2E Testing E2E测试
    ##Css预处理
    * Sass/SCSS * with dart-sass
    ##格式化代码方式
    * ESLint + Prettier
    * 安装Prettier插件
    * Ctrl+Shift+A -> Reformat
    ##什么时候进行代码规则检测
    * Lint on save
    ##配置文件存放位置
    * In dedicated config files
    ##是否记录这次配置选择
    * (y/n?) n
# 启动项目 
* cnpm run serve
# 在已创建好的项目添加插件
* vue add eslint
# 自定义webpack配置
## 在项目的(和package.json同级的)根目录中新建一个文件vue.config.js
### 这个文件应该导出一个包含了选项的对象
    // vue.config.js
    module.exports = {
        // 选项...
    }


# [安装Vue 3.0组件API](https://github.com/vuejs/composition-api)
cnpm install @vue/composition-api --save
# 安装axios
* cnpm install axios -D      
# 安装element-ui
* cnpm i element-ui -S    
# 安装加载器
* cnpm install --save-dev css-loader style-loader postcss-loader autoprefixer 
## 安装sass-loader
npm install -D sass-loader sass
## 安装less-loader
npm install -D less-loader less
## 安装stylus-loader
npm install -D stylus-loader stylus
# 安装postcss-pxtorem
cnpm i postcss-pxtorem -D
# 安装node-sass
cnpm install node-sass@latest




# 命令帮助 
* vue create --help

# IDEA安装vue插件
* file ->settings ->plugins ->vue.js
# IDEA设置新建vue模板
* file ->setting ->editor ->file and code Templates
# vue文件支持html语法指令提示
* File -> setting -> Editor -> File Type -> HTML -> *.vue
# HTML 文件支持 VUE 的语法指令提示
* File -> Setting -> Edit -> Inspections -> html -> Unknown HTML tag attribute -> Custom HTML tag attribute
---------------------------------------------------------------
    @tap
    @tap.stop
    @tap.prevent
    @tap.once
    @click
    @click.stop
    @click.prevent
    @click.once
    @change
    @change.lazy
    @change.number
    @change.trim
    v-model
    v-for
    v-text
    v-html
    v-if
    v-else-if
    v-else
    v-pre
    v-once
    v-bind
    scoped
--------------------------------------------------------------- 









