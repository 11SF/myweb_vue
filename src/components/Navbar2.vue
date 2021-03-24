<template>
  <v-app-bar color="primary" dark>
    <v-app-bar-title>Spotify Member</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isLogin == false" @click="goLogin()">login</v-btn>
    <v-btn v-else @click="GETLOGOUT">logout</v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: "Navbar2",
    data() {
        return {
            isLogin : '',
            session : localStorage.getItem('userKey')
        }
    },
    methods : {
        goLogin() {
            this.$router.push(
                {path : 'Login'}
            )
        },
        ...mapMutations([
            'GETLOGOUT'
        ])
    },
    created() {
        // let a = localStorage.getItem('userKey')
        if(this.session != null) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    },
    computed: {
        getLocalKey() {
            return 
        }
    }
}
</script>

<style>
</style>