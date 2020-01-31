const state = {
  menuList: []
};
const getters = {
  getMenuList: state => {
    return state.menuList;
  }
};
const mutations = {
  updateMenuList(state, newList) {
    state.menuList = newList;
  },
  deleteMenuList(state, data) {
    state.menuList.forEach((item, index) => {
      if (item == data) {
        state.menuList.splice(index, 1);
      }
    });
  },
  addMenuList(state, data) {
    state.menuList.push(data);
  }
};
const actions = {
  async fecthMenuList({ commit }) {
    let data = await fetch(
      "https://orderpizza-c293e.firebaseio.com/menu.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
    // console.log(data);
    commit("updateMenuList", data);
  }
  // async DeleteMenuList({ commit }, item) {
  //   // console.log(item);
  //   await this.http
  //     .delete(item.id + ".json")
  //     .then(commit("deleteMenuList", item));
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
