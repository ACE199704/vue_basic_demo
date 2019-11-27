<template>
  <div>
    <h3>筛选</h3>
    <select name="Count" id="Count" v-model="count" @change="changeCount(count)">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="100">100</option>
      <option value="200">200</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Select",
  data() {
    return {
      count: 200
    };
  },
  methods: mapActions(["changeCount"])
};
</script>
<style >
</style>