import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus : "notLogin",
    userData : ""
  },
  mutations: {
    LOGIN(state, payload) {
        state.loginStatus = 'Login'
        state.userData = payload.data.userKey
        localStorage.setItem('userKey', payload.data.userKey)
        localStorage.setItem('userKey', payload.data.userKey)
    },
    LOGOUT(state) {
      state.loginStatus = 'notLogin'
      state.userData = ""
      localStorage.removeItem('userKey')
    },
    CHECKLOGIN(state) {
      state.loginStatus = 'Login',
      state.userData = localStorage.getItem('userKey')
    }
  },
  actions: {
    async adminLogin(context, forms) {
      let user = await axios.post("http://localhost:5000/api/admin/login",forms)
      if(user.data.status) {
        context.commit('LOGIN', user) 
      }
    },
    logout(context) {
      context.commit('LOGOUT')
    },
    checkLogin(context){
      if(localStorage.getItem('userKey') != null) {
        context.commit('CHECKLOGIN')
      }
    }
  },
  getters: {
    getLoginStatus(state) {
      return state.loginStatus
    },
    getUserData(state) {
      return state.userData
    }
  },
  computed: {
    localStorage_data() {
      return localStorage.getItem('userKey')
    }
  },
  watch: {
    localStorage_data(newData,state)  {
      if(newData == null) {
        state.loginStatus = 'notLogin'
    }
  }
  },
  modules: {},
});
