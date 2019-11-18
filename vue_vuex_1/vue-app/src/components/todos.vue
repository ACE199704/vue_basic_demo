<template>
  <div>
    <div v-for="(todo,index) in todos" :key="index">
      <todo :todo="todo" @deleteItem="$emit('deleteItem',todo.id)" />
    </div>
  </div>
</template>

<script>
import todo from "./todo";
export default {
  name: "todos",
  components: {
    todo
  },
  // props: ["todos"]
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    deleteItem(val) {
      console.log(val);
    }
  }
};
</script>
<style scoped>
</style>