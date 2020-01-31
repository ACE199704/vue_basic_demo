<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view class="mt-5"></router-view>
    </div>
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
</style>
