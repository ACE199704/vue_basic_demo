<template>
  <div class="home">
    <h1>任务清单</h1>
    <div>
      <router-link class="nav" to="/">主页</router-link>
      <router-link class="nav" to="/about">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.home {
  background: #0c6085;
  color: white;
  text-align: center;
  padding: 10px;
}
.nav {
  color: white;
  padding-right: 5px;
  text-decoration: none;
}
</style>
