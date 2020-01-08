#工程说明
## 项目结构描述
```
tree -I "node_modules"
.
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    └── main.js
```
## 目录文件说明
### babel.config.js：包含 Babel （ES Transpiler 允许我们在那些尚未支持现代 JavaScript 的浏览器上使用这些新特性）配置。
### package.json：包含所需的 JavaScript 模块、项目信息和依赖。
### public：包含公开的访问文件，例如 index.html 和图标。
### src：我们将把大多数时间都花在这个目录上，包含了我们项目的 Vue 源文件。
### src/main.js：应用初始化的启动文件。
### src/App.vue：应用的主要组件。
### src/assets：包含静态资源。
### src/components：包含应用的组件。

## 加载顺序
* src/main.js -> src/App.vue -> src/router/index.js



