import Axios from "axios";
import { state } from "fs";

const state = {
  todos: []
};
const getters = {
  getTodos: state => state.todos
};
const mutations = {
  giveTodos(state, res) {
    state.todos = res;
  },
  updateTodo(state, newTodo) {
    const index = state.todos.findIndex(todo => todo.id === newTodo.id);
    // console.log(index);
    if (index !== -1) {
      state.todos.splice(index, 1, newTodo);
    }
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  addTodo(state, newTodo) {
    state.todos = [newTodo, ...state.todos];
  }
};
const actions = {
  async fecthTodos({ commit }) {
    const res = await Axios.get("http://jsonplaceholder.typicode.com/todos");

    commit("giveTodos", res.data);
  },
  async changeTodos({ commit }, newTodo) {
    const res = await Axios.put(
      `http://jsonplaceholder.typicode.com/todos/${newTodo.id}`,
      newTodo
    );
    // console.log(res.data);
    commit("updateTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    const res = await Axios.delete(
      `http://jsonplaceholder.typicode.com/todos/${id}`
    );
    // console.log(res.data);
    commit("deleteTodo", id);
  },
  async addTodo({ commit }, newTodo) {
    const res = await Axios.post(
      "http://jsonplaceholder.typicode.com/todos",
      newTodo
    );
    // console.log(res.data);
    commit("addTodo", res.data);
  },
  async changeCount({ commit }, count) {
    const res = await Axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${count}`
    );

    commit("giveTodos", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
