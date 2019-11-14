//全局变量
let data = {
  name: "Ace",
  age: 23
};

//创建全局组件
Vue.component("Greeting", {
  //Greeting的意思是 这个全局组件的名字
  //html模版
  template: `<div><p>这是全局组件 ，可以在任何实例的容器中使用,我的名字是{{name}}</p>
  <button @click="changename">changeName</button></div>`,

  //属性
  data() {
    return data; //使用全局变量
    // return {    //不使用全局变量
    //   name: "Ace",
    //   age: 21
    // };
  },

  //方法
  methods: {
    changename() {
      this.name = "ACEEEE";
    }
  }
});

const oneV = new Vue({
  el: "#vue-app-one",
  data() {
    return {
      title: "this is app one"
    };
  }
});
const twoV = new Vue({
  el: "#vue-app-two",
  data() {
    return {
      title: "this is app two"
    };
  },

  methods: {
    changevueone() {
      oneV.title = "hhhhh,title one has changed";
    }
  }
});
