<template>
  <div>
    <div class="backgroundP mb-5">
      <div class="homeP">
        <h2>欢迎</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum soluta aperiam placeat minus. Id perspiciatis dolorum ipsam veritatis illum!</p>
        <button class="btn btn-info btn-large" @click="returnsback">Let's order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnsback() {
      this.$router.replace("/menu");
    }
  }
};
</script>

<style scoped>
.backgroundP {
  background: url("../../src/assets/pexels-photo-315755.jpeg") center center;
  height: 75vh;
  padding: 10%;
}
.homeP {
  text-align: center;
  margin: auto;
  background: rgba(255, 234, 234, 0.89);
  padding: 10%;
}
</style>