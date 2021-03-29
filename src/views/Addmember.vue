<template>
    <div class="container">
        <h1 class="text-center">Add member</h1>
        <div class="d-flex justify-center">
            <form action="" class="bg-light" >
                <label for="username" class="form-label">Name</label>
                <input type="text" class="form-control mb-5" id="username"  v-model="form.name">

                <label for="expireDate" class="form-label">วันหมดอายุ (03/mm/yyyy)</label>
                <input type="text" class="form-control mb-5" id="expireDate"  v-model="form.expireDate">

                <label for="img_src" class="form-label">link image</label>
                <input type="text" class="form-control mb-5" id="img_src"  v-model="form.img_src">
                <div class="d-grid">
                    <button class="btn btn-primary" @click="save">Save</button>    
                </div>              
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'Add member',
    data() {
        return {
            name : '',
            form: {
                name : "",
                lastDate : "-",
                expireDate : "",
                img_src: ""
            }
        }
    },
    methods: {
        async save() {
            let res = await axios.post('http://localhost:5000/api/member/addmember',this.form)
            console.log(res)
            if(res.data.status == 'success') {
                this.$router.push("/spotify/members")
            }
        }
    }
}
</script>

<style scoped>
form {
    width: 500px;
    padding: 50px;
    border-radius: 30px;
}
</style>