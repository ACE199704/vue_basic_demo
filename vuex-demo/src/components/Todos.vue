<template>
  <div>
    <h3>待办事项</h3>
    <p class="coll">
      <span class="col">双击表示完成</span>
      <span class="col">
        <span class="unfinished"></span>
        =未完成
      </span>

      <span class="col">
        <span class="finished"></span>
        =完成
      </span>
    </p>
    <!-- <p>{{getTodos}}</p> -->
    <div class="todos">
      <div
        class="todo"
        v-for="(todo,index) in getTodos"
        :key="index"
        :class="{finished:todo.completed}"
        @dblclick="finished(todo)"
      >
        {{todo.title}}
        <i class="far fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["getTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    // ...mapMutations(["updateTodo"]),
    finished(todo) {
      const newTodo = {
        title: todo.title,
        id: todo.id,
        completed: !todo.completed
      };
      this.updateTodo(newTodo);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  /* border: 2px solid rgb(31, 69, 101); */
  background: #75c2f5;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: white;
}
.coll {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.unfinished {
  background: #75c2f5;
  margin: 0;
  padding: 0px 7px;
  font-size: 0.8rem;
}
.finished {
  background: rgb(12, 65, 109);
  color: white;
}
.col .finished {
  margin: 0;
  padding: 0px 7px;
  font-size: 0.8rem;
}

@media (max-width: 500px) {
  .coll {
    grid-template-columns: 1fr;
    text-align: start;
    margin-bottom: 2rem;
    margin-top: 1.2rem;
  }
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>