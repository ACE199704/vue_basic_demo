<template>
  <div>
    <AddTodo @addList="addList" />
    <todos :todos="todos" @deleteItem="deleteItem" />
  </div>
</template>

<script>
import todos from "../components/todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteItem(val) {
      // console.log(val);
      axios
        .delete(`http://jsonplaceholder.typicode.com/todos/${val}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== val)))
        .catch(err => console.log(err));
    },
    addList(newadd) {
      // this.todos = [newadd, ...this.todos];
      const { title, completed } = newadd;
      axios
        .post("http://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [res.data, ...this.todos]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */
/* h1 {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
} */
</style>
