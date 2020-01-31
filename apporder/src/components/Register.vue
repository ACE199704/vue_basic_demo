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
            <div class="form-group">
              <label for="rePassword">确认密码</label>
              <input
                type="password"
                name="rePassword"
                class="form-control"
                v-model="rePassword"
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
      password: "",
      rePassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.email) {
        if (this.password) {
          if (this.password === this.rePassword) {
            const formData = {
              email: this.email,
              password: this.password,
              rePassword: this.rePassword
            };

            axios
              .post("/users.json", formData)
              .then(res => this.$router.push({ name: "login" }));
          } else {
            alert("两次输入密码不一致");
          }
        } else {
          alert("密码输入不得为空");
        }
      } else {
        alert("邮箱输入不得为空");
      }
    }
  }
};
</script>

<style >
</style>