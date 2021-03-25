<template>
  <v-app-bar color="primary" dark>
    <v-app-bar-title>Spotify Member</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isLogin == false" @click="goLogin()">login</v-btn>
    <v-btn v-else @click="logout">logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name: "Navbar2",
    data() {
        return {
            isLogin : ''
        }
    },
    methods : {
        goLogin() {
            this.$router.push(
                {path : 'Login'}
            )
        },
        logout() {
            this.$store.dispatch('logout')
            this.$router.push({name : 'SpotifyMember'})
        }
    },
    computed: {
        loginStatus() {
            return this.$store.getters.getLoginStatus
        }
    },
    watch: {
        loginStatus(newStatus) {
            if(newStatus === 'Login') {
                this.isLogin = true
            } else {
                this.isLogin = false
                this.$router.push({name : "SpotifyMember"})
            }
                
        }
    },
    created() {
        if(this.$store.getters.getLoginStatus === 'Login') {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    },
}
</script>

<style>
</style>