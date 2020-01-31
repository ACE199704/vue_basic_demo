<template>
  <div class="row">
    <!-- 页面 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody class="tbody" v-for="item in menuList" :key="item.id">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.sid">
            <td>{{ option.size }}</td>
            <td>{{ option.prize }}</td>
            <td>
              <button @click="addData(item, option)" class="btn btn-sm btn-outline-info">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="dataAdd.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataAdd" :key="item.index">
              <td>
                <button class="btn btn-sm" @click="decreaseBtn(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button class="btn btn-sm" @click="increaseBtn(item)">+</button>
              </td>
              <td>{{ item.name }}{{ item.size }}</td>
              <td>{{ item.prize * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{ totolCnt }}</p>

        <button class="btn btn-info btn-block">提交</button>
      </div>
      <div v-else>{{ dataWrite }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataAdd: [],
      dataWrite: "当前购物车中没有物品"
      // items: []
    };
  },
  methods: {
    addData(item, option) {
      //console.log(id, sid);
      let data = {
        id: item.id,
        name: item.name,
        sid: option.sid,
        size: option.size,
        prize: option.prize,
        quantity: 1
      };
      //
      // console.log(this.dataAdd);
      if (this.dataAdd.length <= 0) {
        this.dataAdd.push(data);
      } else {
        let d = this.dataAdd.filter(d => {
          return d.name === item.name && d.size === option.size;
        });
        // console.log(d);
        if (d.length == 1) {
          // console.log(d);
          // console.log(this.dataAdd.findIndex(d));
          d[0].quantity++;
        } else {
          this.dataAdd.push(data);
        }
      }
    },
    decreaseBtn(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeData(item);
      }
    },
    increaseBtn(item) {
      item.quantity++;
    },
    removeData(item) {
      this.dataAdd.splice(this.dataAdd.indexOf(item), 1);
    }
  },
  computed: {
    totolCnt() {
      let s = 0;
      // s += this.dataAdd.forEach(item => {
      //   item.quantity * item.prize;
      // });
      // return s;
      for (let index in this.dataAdd) {
        s += this.dataAdd[index].quantity * this.dataAdd[index].prize;
      }
      return s;
    },
    menuList() {
      return this.$store.getters.getMenuList;
    }
  },
  created() {
    // fetch("https://orderpizza-c293e.firebaseio.com/menu.json", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => (this.items = data));
    this.$store.dispatch("fecthMenuList");
  }
};
</script>

<style></style>
