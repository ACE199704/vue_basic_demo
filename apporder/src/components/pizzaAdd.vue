<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea cols="30" rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p>
      <strong>选项一：</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.prize1" />
      </div>
    </div>
    <p>
      <strong>选项二：</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.prize2" />
      </div>
    </div>
    <button class="btn btn-block btn-info" type="button" @click="addMenuButton">添加</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dataMenu: [],
      newPizza: {
        name: "",
        description: "",
        size1: "",
        prize1: "",
        size2: "",
        prize2: ""
      }
    };
  },
  methods: {
    addMenuButton() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            prize: this.newPizza.prize1
          },
          {
            size: this.newPizza.size2,
            prize: this.newPizza.prize2
          }
        ]
      };
      // this.dataMenu.push(data);
      // console.log(data);
      fetch("https://orderpizza-c293e.firebaseio.com/menu.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(dataa => this.$store.commit("addMenuList", data))
        // .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  }
};
</script>
