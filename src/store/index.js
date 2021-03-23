import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_private_key : ""
  },
  mutations: {
    GETLOGIN(state, payload) {
      state.user_private_key = payload.data
      localStorage.private_key = payload.data
    },
    GETLOGOUT(state) {
      state.user_private_key = ""
      localStorage.removeItem('private_key')
    }
  },
  actions: {
    // adminLogin : ({commit}, forms) => ,
    adminLogin : async ({ commit },forms)=> {
      let user = await axios.post("http://localhost:5000/api/admin/login",forms)
      commit('GETLOGIN', user)
    },
  },
  modules: {},
});
