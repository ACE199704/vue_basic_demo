<template>
  <div class="list">
    <input type="checkbox" @change="changed" />
    <span :class="{ del: todo.completed }">{{ todo.title }}</span>
    <button class="button" @click="$emit('deleteItem', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  name: "tido",
  props: ["todo"],
  methods: {
    changed() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>
<style scoped>
.list {
  padding: 5px;
  margin: 5px;
}
.list span {
  padding-left: 10px;
}
.del {
  text-decoration: line-through;
}
.button {
  display: inline;
  /* right: 5 */
  position: absolute;
  right: 20px;
  padding: 2px 5px;
  /* background:    */
}
</style>
