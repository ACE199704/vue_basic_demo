<template>
  <div>
    <form @submit.prevent="addtodo">
      <input
        type="text"
        name="title"
        placeholder="请添加待办事项..."
        class="input"
        v-model="title"
      />
      <input type="submit" value="添加" class="add" />
    </form>
  </div>
</template>

<script>
// import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addtodo() {
      // console.log(this.title);
      const newadd = {
        // id: uuid.v4(),
        title: this.title,
        completed: false
      };
      // console.log(newadd.id);
      this.$emit("addList", newadd);
      this.title = "";
    }
  }
};
</script>
<style scoped>
.input {
  margin: 0;
  width: 85%;
  height: 30px;
  font-size: 1rem;
}
.add {
  margin: 0;
  margin-left: 0.5%;
  width: 13%;
  height: 33px;
  background: #08666d;
  color: white;
  /* padding: 0px; */
  border-radius: 7px;
  border: 0;
}
</style>
