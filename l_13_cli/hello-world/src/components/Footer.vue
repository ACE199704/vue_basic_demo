<template>
  <div class="footer" @click="changefootertitle">
    <p>{{copyright}} {{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Copyright 2020 Vue Demo"
    };
  },
  methods: {
    changefootertitle() {
      this.$emit("titleChange", "这是通过了footer组件修改的title");
    }
  }
};
</script>

<style scoped>
.footer {
  margin: 0;
  background: #333;
  color: white;
  padding: 0;
}
.footer p {
  margin: 0;
  padding: 0 20px;
}
</style>