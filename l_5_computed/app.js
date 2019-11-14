// alert("s");
new Vue({
  el: '#vue-app',
  data() {
    return {
      a: 1,
      b: 1,
      age: 12
    }
  },
  methods: {
    // //只要一个变量发生变化，方法里所有的函数都会发生变化；
    // addToA() {
    //   console.log('A');
    //   return this.a + this.age;
    // },
    // addToB() {
    //   console.log('B');
    //   return this.b + this.age;
    // },

  },
  computed: {
    addToA() {
      console.log('A');
      return this.a + this.age;
    },
    addToB() {
      console.log('B');
      return this.b + this.age;
    }
  }
});