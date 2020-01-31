const state = {
  userid: "",
  isLogin: false
};
const getters = {
  getUserid: state => {
    return state.userid;
  },
  getIsLogin: state => {
    return state.isLogin;
  }
};
const mutations = {
  passwordIsTure: (state, data) => {
    state.userid = data[0].email;
    state.isLogin = true;
  },
  getIntoLogin: state => {
    state.userid = null;
    state.isLogin = false;
  }
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
