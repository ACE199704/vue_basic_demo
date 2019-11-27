const state = {
  todos: [
    {
      id: 1,
      title: "待办事项1",
      completed: true
    },
    {
      id: 2,
      title: "待办事项2",
      completed: true
    },
    {
      id: 3,
      title: "待办事项3",
      completed: false
    }
  ]
};
const getters = {
  completedTodos: state => {
    return state.todos.filter(todo => todo.completed);
  },
  completedTodosCnt: (state, getters) => {
    return getters.completedTodos.length;
  },
  getTodosById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
};
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  }
};
const actions = {
  async fecthTodos({ commit }) {
    const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
    console.log(res);
    commit("setTodos", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
