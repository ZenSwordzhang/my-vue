import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 引入布局组件
import Layout from "views/layout/Index.vue";
import ContentLayout from "views/layout/content/Index.vue";

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "login",
      hidden: true,
      meta: {
        name: "主页"
      }
    },
    {
      path: "/login",
      name: "Login",
      hidden: true,
      meta: {
        name: "登录"
      },
      component: () => import("views/login/Index.vue")
    },
    {
      path: "/content",
      name: "Content",
      redirect: "index",
      meta: {
        name: "菜单页",
        icon: "console"
      },
      component: ContentLayout,
      children: [
        {
          path: "/index",
          name: "Index",
          meta: {
            name: "首页"
          },
          component: () => import("views/content/Index.vue")
        }
      ]
    },
    {
      path: "/console",
      name: "Console",
      redirect: "index",
      meta: {
        name: "控制台",
        icon: "console"
      },
      component: Layout,
      children: [
        {
          path: "/index",
          name: "Index",
          meta: {
            name: "首页"
          },
          component: () => import("views/console/Index.vue")
        }
      ]
    }
  ]
});
