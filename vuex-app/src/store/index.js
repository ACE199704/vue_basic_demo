import Vue from "vue";
import Vuex from "vuex";
import count from "./moudles/count";
import todos from "./moudles/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    todos
  }
});
