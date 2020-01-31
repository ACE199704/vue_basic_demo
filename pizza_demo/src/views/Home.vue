<template>
  <div class="home">
    <h1>Home</h1>
    <button class="btn btn-info" @click="gotoLink()">跳转</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    gotoLink() {
      //上一次跳转的页面
      // this.$router.go(-1);
      //指定跳转的页面
      // this.$router.replace("menu");
      // this.$router.replace({ name: "menuLink" });
      //通过push来跳转
      // this.$router.push("/menu");
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>
