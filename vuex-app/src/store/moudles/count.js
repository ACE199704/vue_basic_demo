const state = {
  count: 0
};
const getters = {
  count: state => {
    return state.count;
  }
};
const mutations = {
  incrementCnt(state) {
    state.count++;
  },
  decrementCnt(state, n) {
    state.count -= n;
  }
};
const actions = {
  incrementCntAsync(context) {
    setTimeout(() => {
      context.commit("incrementCnt");
    }, 2000);
  },
  decrementCntAsync({ commit }, n) {
    setTimeout(() => {
      commit("decrementCnt", n);
    }, 1000);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
