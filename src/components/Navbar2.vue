<template>
  <v-app-bar dark>
    <v-app-bar-title>11SF Spotify Member</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="goLogin()" v-if="isLogin === 'notlogin'"> Login</v-btn>
    <v-btn @click="goLogout()" v-else> Logout </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar2",
  data() {
    return {
      isLogin: "",
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "Login",
      });
    },
    goLogout() {
      localStorage.removeItem("userKey");
      this.isLogin = 'notlogin'
      this.$router.push({
        name: "SpotifyMember",
      });
    },
  },
  created() {
    let a = localStorage.getItem("userKey");
    if (a != null) {
      this.isLogin = "logedin";
    } else {
      this.isLogin = "notlogin";
    }
  },
};
</script>

<style>
</style>