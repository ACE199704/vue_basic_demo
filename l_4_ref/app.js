new Vue({
  el: "#vue-app",
  data() {
    return {
      name: "",
      age: 0
    };
  },
  methods: {
    getName() {
      // console.log(this.$refs.name.value);
      this.name = this.$refs.name.value;
    },
    getAge() {
      // console.log(this.$refs.age.value);
      this.age = this.$refs.age.value;
    }

  },
  watch: {
    age(val, oldval) {
      console.log(val, oldval);
    }
  }
});