<template>
  <div id="todos">
    <h3>待办事项</h3>
    <div class="cols">
      <p class="col">
        <span>双击表示完成</span>
      </p>
      <p class="col">
        <span class="block unfinished"></span>
        <span>=未完成</span>
      </p>
      <p class="col">
        <span class="block finished"></span>
        <span>=完成</span>
      </p>
    </div>
    <div class="todos">
      <p
        @dblclick="changeState(todo)"
        v-for="(todo,index) in getTodos"
        :key="index"
        class="todo"
        :class="{finished:todo.completed}"
      >
        {{todo.title}}
        <i class="fas fa-trash" @click="deleteTodo(todo.id)"></i>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todos",
  methods: {
    ...mapActions(["fecthTodos", "changeTodos", "deleteTodo"]),
    changeState(todo) {
      const newTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      // console.log(newTodo);
      this.changeTodos(newTodo);
    }
  },
  computed: {
    ...mapGetters(["getTodos"])
  },
  created() {
    this.fecthTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  /* text-align: center; */
}
.todo {
  background: rgb(238, 164, 164);
  margin-top: 0;
  margin-bottom: 0;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.finished {
  background: #bf5565;
  color: white;
}
i {
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  /* justify-content: center; */
  /* align-items: center;
  justify-content: center; */
}
.col {
  position: relative;
}
.block {
  margin: 0;
  padding: 0px 9px;
  font-size: 0.8rem;
}
.unfinished {
  background: rgb(238, 164, 164);
}
@media (max-width: 500px) {
  .todos {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    /* text-align: center; */
  }
}
</style>
