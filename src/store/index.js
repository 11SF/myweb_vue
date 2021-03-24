import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userKey : ""
  },
  mutations: {
    GETLOGIN(state, payload) {
      if(payload.data.status) {
        console.log(payload.data)
        state.userKey = payload.data
        localStorage.setItem('userKey', payload.data.userKey)
      } 
    },
    GETLOGOUT(state) {
      state.userKey = ""
      localStorage.removeItem('userKey')
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
  getters : {
    getlocalKey() {
      return localStorage.getItem('userKey')
    }
  }
});
