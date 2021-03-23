<template>
    <v-row align-content="center">
        <v-col>
            <v-card max-width="350" class="mx-auto pa-5" rounded="lg">
                <v-card-title>Login for admin</v-card-title>
                <v-text-field label="Username" v-model="user.username"></v-text-field>
                <v-text-field label="Password" v-model="user.password" type="password"></v-text-field>
                <v-alert type="error" v-if="login_check === false">Invalid username or password.</v-alert>
                <v-btn @click="req_login()" color="primary" block>Login</v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            user : {
                username : "",
                password : ""
            },
            login_check : ""
        }
    },
    methods: {
        req_login() {
            if(this.user.username === "admin" && this.user.password === "admin") {
                localStorage.setItem('userKey','1234')
                this.$router.push("SpotifyMember")
            } else {
                this.login_check = false
            }
        }
    }
}
</script>

<style>

</style>