<template>
  <div id="Input">
    <h3>添加待办事项</h3>
    <form @submit.prevent="addTodo(newTodo)">
      <input type="text" v-model="newTodo.title" placeholder="请输入待办事项" />
      <input type="submit" value="添加" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Input",
  data() {
    return {
      newTodo: {
        title: "",
        completed: false
      }
    };
  },
  methods: mapActions(["addTodo"])
};
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 2px #bf5565 solid;
  outline: 0;
}
input[type="submit"] {
  flex: 1;
  padding: 10px;
  background: #bf5565;
  color: white;
  border: none;
}
</style>