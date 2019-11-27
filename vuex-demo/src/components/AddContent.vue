<template>
  <div>
    <h3>添加内容</h3>
    <form @submit.prevent="submitAdd">
      <input type="text" placeholder="添加待办事件..." v-model="title" />
      <input type="submit" value="提交" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // submitEvent() {}
  name: "AddContent",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addtodoAsync"]),
    submitAdd() {
      this.addtodoAsync(this.title);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 2px rgb(12, 65, 109) solid;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: rgb(12, 65, 109);
  color: white;
  border: 0ch;
}
</style>