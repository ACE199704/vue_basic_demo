// alert("a");
new Vue({
  el: '#vue-app',
  data() {
    return {
      age: 30,
      x: 0,
      y: 0
    };
  },
  methods: {
    sub(num) {
      this.age -= num;
    },
    add(num) {
      this.age += num;
    },
    updateXY(event) {
      // this.x = mouseX;
      // console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickHandle() {
      alert("Hello");
    },
    logName() {
      console.log("正在输入名字...");
    },
    logAge() {
      console.log("正在输入年龄...");
    }

  }
});