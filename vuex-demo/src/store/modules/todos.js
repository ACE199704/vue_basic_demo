import Axios from "axios";

const state = {
  todos: []
};
const getters = {
  getTodos: state => state.todos
};
const mutations = {
  // defineTodos: state => todo => (state.todos = todo)
  defineTodos(state, todo) {
    state.todos = todo;
  },
  addTodo(state, todo) {
    state.todos = [todo, ...state.todos];
  },
  deleteTodos(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  updateTodo(state, newtodo) {
    // state.todos.find(todo => todo.id === newtodo.id);
    const index = state.todos.findIndex(todo => todo.id === newtodo.id);
    // console.log(index);
    if (index !== -1) {
      state.todos.splice(index, 1, newtodo);
    }
  }
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await Axios.get("http://jsonplaceholder.typicode.com/todos");
    commit("defineTodos", res.data);
  },
  async addtodoAsync({ commit }, title) {
    const todo = {
      title: title,
      completed: false
    };
    const res = await Axios.post(
      "http://jsonplaceholder.typicode.com/todos",
      todo
    );

    // console.log(res);
    commit("addTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    const res = await Axios.delete(
      `http://jsonplaceholder.typicode.com/todos/${id}`
    );
    // console.log(res);
    commit("deleteTodos", id);
  },
  async changeCount({ commit }, count) {
    const res = await Axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${count}`
    );
    // console.log(res);
    commit("defineTodos", res.data);
  },
  async updateTodo({ commit }, newTodo) {
    const res = await Axios.put(
      `http://jsonplaceholder.typicode.com/todos/${newTodo.id}`,
      newTodo
    );
    // console.log(res);
    commit("updateTodo", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
