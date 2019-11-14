<template>
  <div class="header" @click="changeContent">
    <h1>{{title1}} {{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title1: "Vue Components Demo"
    };
  },
  methods: {
    changeContent() {
      //参数一是事件名称，参数二是传入的值
      this.$emit("titlechange", "已经通过emit修改了值");
    }
  }
};
</script>

<style scoped>
.header {
  background: lightblue;
  margin: 0;
  padding: 1px;
}
h1 {
  color: #333;
  text-align: center;
  margin: 5px;
  font-size: 1.5rem;
}
</style>