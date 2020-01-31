import Vue from "vue";
import Vuex from "vuex";
import user from "./moudles/user";
import menu from "./moudles/menu";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    menu
  }
});
