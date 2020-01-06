const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，
  // 但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath
  publicPath: process.env.NODE_ENV === "production" ? "/prod/" : "/",

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: process.env.NODE_ENV === "production" ? "prod_dist" : "dev_dist",
  // 放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录
  assetsDir: "static",

  filenameHashing: true,

  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 动态设置title，当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 是否需要生产环境 sourceMap，默认为true
  productionSourceMap: false,
  //
  // // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // // corsUseCredentials: false,
  // // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: (config) => {
  // },

  // webpack 链接 API，用于生成和修改 webpack 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    // 自动添加文件名后缀
    config.extensions = [".js", ".json", ".vue"];
    // 别名设置
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("base", resolve("./src/base"))
      .set("components", resolve("./src/components"))
      .set("layout", resolve("./src/layout"))
      .set("static", resolve("./src/static"))
      .set("utils", resolve("./src/utils"))
      .set("views", resolve("./src/views"));
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization.splitChunks({
      cacheGroups: {}
    });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule("eslint")
      .exclude // 此处需指定绝对路径
      .add("/src/lib")
      .end();
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    // requireModuleExtension: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      sass: {
        data: `@import "./src/styles/main.scss";`
      },
      postcss: {
        // options here will be passed to postcss-loader
        // 添加插件
        plugins: [
          // px转换为rem 需要cnpm i postcss-pxtorem -D
          require("postcss-pxtorem")({
            // 换算的基数
            rootValue: 100,
            // 忽略转换正则匹配项
            selectorBlackList: ["ab", "bc"],
            propList: ["*"]
          })
        ]
      }
    }
    // 启用 CSS modules for all css / pre-processor files.
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  // 反向代理
  devServer: {
    // 配置自动启动浏览器
    open: true,

    host: "127.0.0.1",

    port: 8000,

    https: false,
    // 热更新
    hotOnly: false,
    // 配置跨域处理
    proxy: {
      "/api": {
        target: "http://192.168.1.114:8080",
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    },

    before: app => {}
  },

  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,

  // // 仅在生产环境使用，不建议开发环境使用
  // // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // pwa: {},

  // 第三方插件配置
  pluginOptions: {}
};
