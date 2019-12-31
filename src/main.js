import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './utils/axios';
// import VueCompositionApi from '@vue/composition-api';
Vue.prototype.$axios = axios;
// Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
