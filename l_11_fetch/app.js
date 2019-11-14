new Vue({
  el: "#vue-app",
  data() {
    return {
      todos: [],
      todo: {
        title: "",
        completed: false
      }
    };
  },
  mounted() {
    const todos = fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        this.todos = data;
      });
  },
  methods: {
    onSubmit() {
      // console.log(this.todo);
      fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(this.todo),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        // .then(todo => console.log(todo));
        .then(todo => {
          this.todos.unshift(todo);
        });
    }
  }
});
