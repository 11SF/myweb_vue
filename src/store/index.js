import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import jwt_decode from 'jwt-decode';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus : "notLogin",
    loadingStatus : false,
    userData : "",
    userLevel : "",
    membersData : '',
    memberDateStatus : {
      goodMember  : 0,
      inTime      : 0,
      late        : 0,
    }
  },
  mutations: {
    LOGIN(state,payload) {
        state.loginStatus = 'Login'
        state.userData = jwt_decode(payload.data.token)
        localStorage.setItem('userKey', payload.data.token)
    },
    LOGOUT(state) {
      state.loginStatus = 'notLogin'
      state.userData = ""
      localStorage.removeItem('userKey')
    },
    CHECKLOGIN(state) {
      state.loginStatus = 'Login',
      state.userData = jwt_decode(localStorage.getItem('userKey'))
    },
    MEMBERSDATA(state,payload) {
      state.membersData = payload.data
    },
  },
  actions: {
    async adminLogin(context, forms) {
      let user = await axios.post("https://mysitebackend.herokuapp.com/api/auth/login",forms)
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
    },
    async fetchMembersData(context) {
      let res = await axios.get('https://mysitebackend.herokuapp.com/api/member/get/all')
        context.commit('MEMBERSDATA', res)
    },
  },
  getters: {
    getLoginStatus(state) {
      return state.loginStatus
    },
    getUserData(state) {
      return state.userData
    },
    getMembersData(state) {
      return state.membersData
    },
    getLevelUser(state) {
      return state.userLevel
    },
    getLoadingStatus(state) {
      return state.loadingStatus
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
