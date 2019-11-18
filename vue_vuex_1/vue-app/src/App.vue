<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* h1 {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
} */
</style>
