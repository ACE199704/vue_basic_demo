<template>
  <div id="app">
    <div class="container">
      <Select />
      <Input />
      <todos />
    </div>
  </div>
</template>

<script>
import todos from "./components/todos";
import Input from "./components/input";
import Select from "./components/select";
export default {
  name: "app",
  components: {
    todos,
    Input,
    Select
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f5d2c7;
  line-height: 1.6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
