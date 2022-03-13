import Vue from "vue";
 import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, userData) {
      state.user.data = userData;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_USER", user ? user : null);
      commit("SET_LOGGED_IN", user !== null);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {},
});
