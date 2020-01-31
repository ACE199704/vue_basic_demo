import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { store } from "./store/store";
//配置默认根路径
axios.defaults.baseURL = "https://orderpizza-c293e.firebaseio.com/";
Vue.prototype.http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
