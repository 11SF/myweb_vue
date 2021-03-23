<template>
    <v-app>
        <v-row align-content="center">
            <v-col>
                <v-card max-width="400" class="mx-auto pa-5" rounded="lg" ref="form">
                    <v-card-title>Login</v-card-title>
                    <v-form lazy-validation>
                        <v-text-field
                            v-model="forms.username"
                            :rules="nameRules"
                            label="Username"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="forms.password"
                            :rules="passwordRules"
                            type="password"
                            label="Password"
                        >
                        </v-text-field>
                        <v-text>{{$store.state.user_private_key}}</v-text>
                        <v-btn @click="adminLogin(forms)" color="primary" block>
                            Login
                        </v-btn>
                        <v-btn @click="GETLOGOUT" color="primary" block>
                            Logout
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name : "Login",
    data() {
        return {
            forms : {
                username : "",
                password : ""
            }
        }
    },
    methods : {
        ...mapActions([
            'adminLogin'
        ]),
        ...mapMutations([
            'GETLOGOUT'
        ])
    }
}
</script>

<style>

</style>