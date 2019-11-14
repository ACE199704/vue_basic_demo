<template>
  <div id="app">
    <Header :title="title" @titlechange="changetitle" />

    <!-- <Users :users="users" /> -->
    <Users :users="users">
      <h1 slot="h1q">this is a test to slot</h1>
      <p slot="saa">to slot</p>
    </Users>
    <Footer :title="title" @titleChange="changetitle" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Users,
    Header,
    Footer
  },
  data() {
    return {
      users: ["小猪佩奇", "艾米丽", "苏西"],
      title: "这个是App父组件中的title"
    };
  },
  methods: {
    changetitle(value) {
      this.title = value;
    }
  }
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
h1 {
  color: aquamarine;
}
</style>
