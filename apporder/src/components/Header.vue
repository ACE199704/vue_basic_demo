
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#772345"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="mr-2"
        role="img"
        viewBox="0 0 24 24"
        focusable="false"
      >
        <title>Product</title>
        <circle cx="12" cy="12" r="10" />
        <path
          d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
        />
      </svg>
      <a href="#" class="navbar-brand mr-auto">Pizza点餐系统</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">主页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="menu" class="nav-link">菜单</router-link>
        </li>
        <li class="nav-item">
          <router-link to="admin" class="nav-link">管理</router-link>
        </li>
        <li class="nav-item">
          <router-link to="about/contact/people" class="nav-link">关于我们</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="login" class="nav-link" v-show="!isLogin">登陆</router-link>
        </li>
        <li class="nav-link" v-show="isLogin">{{Userid}}</li>
        <li class="nav-item">
          <router-link to="register" class="nav-link" v-show="!isLogin">注册</router-link>
        </li>
        <li class="nav-item">
          <router-link to="login" class="nav-link" v-show="isLogin">[退出]</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>>

<script>
export default {
  computed: {
    Userid() {
      return this.$store.getters.getUserid;
    },
    isLogin() {
      return this.$store.getters.getIsLogin;
    }
  }
};
</script>

<style>
</style>