//实例化一个vue的 对象
new Vue({
  el: "#vue-app", //element
  data() {
    return {
      name: "Ace",
      website: "https://baidu.com",
      websiteTag: '<a href="https://www.taobao.com">taobao</a>'
    };
  },
  methods: {
    // greet: function() {
    //   return "Good night " + this.name;
    // }
    greet(time) {
      // return "Good night " + this.name;
      return `Good ${time} ${this.name}`;
    }
  }
});
