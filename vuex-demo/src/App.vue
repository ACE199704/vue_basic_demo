<template>
  <div id="app">
    <div class="container">
      <AddContent />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import FilterTodos from "./components/FilterTodos";
import AddContent from "./components/AddContent";
export default {
  name: "app",
  components: {
    Todos,
    AddContent,
    FilterTodos
  }
};
</script>
 
<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #dbe6f3;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
