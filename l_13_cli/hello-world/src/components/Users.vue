<template>
  <div id="users">
    <slot name="h1q"></slot>
    <h1>users.vue</h1>

    <ul>
      <li v-for="(user,index) in users" :key="index">{{user}}</li>
    </ul>

    <slot name="saa"></slot>
  </div>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>