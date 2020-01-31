<template>
  <div class="row mt-3">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/ADA.png" class="mx-auto d-block" />
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" name="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                type="password"
                name="password"
                class="form-control"
                v-model="password"
                autocomplete="off"
              />
            </div>
            <button type="submit" class="btn btn-lg btn-info btn-block">提交</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    this.$store.commit("getIntoLogin");
  },
  methods: {
    onSubmit() {
      if (this.email && this.password) {
        axios.get("/users.json").then(res => {
          // console.log(res.data);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            // console.log(user);
            users.push(user);
            // console.log(users);
          }
          const dataa = users.filter(user => {
            return user.email === this.email && user.password === this.password;
          });
          // console.log(dataa);
          if (dataa.length === 0) {
            alert("账号密码错误");
          } else {
            //密码正确后的操作
            this.$store.commit("passwordIsTure", dataa);
            this.$router.push({ name: "home" });
          }
        });
      } else {
        alert("请输入账号密码！");
      }
    }
  }
};
</script>

<style >
</style>