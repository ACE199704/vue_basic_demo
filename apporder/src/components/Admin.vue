 <template>
  <div class="row">
    <div class="col-md-8">
      <pizzaAdd></pizzaAdd>
    </div>
    <div class="col-md-4">
      <h3 class="my-5 text-muted">Menu</h3>
      <table class="table">
        <thead>
          <th>品种</th>
          <th>删除</th>
        </thead>
        <tbody v-for="item in menuList" :key="item.index">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button class="btn btn-sm btn-outline-danger" @click="deleteMenu(item)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import pizzaAdd from "./pizzaAdd";
export default {
  components: {
    pizzaAdd: pizzaAdd
  },
  data() {
    return {
      getMenuData: []
    };
  },
  methods: {
    deleteMenu(item) {
      // console.log(item.name);
      fetch(
        "https://orderpizza-c293e.firebaseio.com/menu/" + item.id + ".json",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => this.$store.commit("deleteMenuList", item))
        .catch(err => console.log(err));
      // this.$store.dispatch("DeleteMenuList", item);
    }
  },
  created() {
    fetch("https://orderpizza-c293e.firebaseio.com/menu.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let menuArray = [];
        for (let key in data) {
          data[key].id = key;
          // console.log(data[key]);
          menuArray.push(data[key]);
        }
        // console.log(menuArray);
        // this.getMenuData = menuArray;
        // console.log(this.getMenuData);
        this.$store.commit("updateMenuList", menuArray);
      })
      .catch(err => console.log(err));
    // this.$store.dispatch("fecthMenuList");
  },
  computed: {
    menuList() {
      return this.$store.getters.getMenuList;
    }
  }
};
</script>

<style >
</style>