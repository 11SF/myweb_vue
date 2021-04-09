<template>
    <v-main>   
        <v-container>
            <table class="table mb-10">
                <thead>
                    <tr>
                        <td>name</td>
                        <td>last-date</td>
                        <td>expire-date</td>
                        
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in $store.getters.getMembersData" :key="member">
                        <td>{{member.name}}</td>
                        <td>{{member.lastDate}}</td>
                        <td>{{member.expireDate}}</td>
                        <td >
                            <button class="btn btn-primary mr-2 mb-2 mb-lg-0 btn-table" @click="memberSelect = member">edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    
        <section class="bg-light pa-5" v-if="memberSelect != ''">
            <h2>ข้อมูลสมาชิก</h2>

            <form>
            <v-row>
                <v-col cols="12" lg="4">
                    <v-text-field
                            v-model="memberSelect.name"
                            :rules="nameRules"
                            label="name"
                            required
                        ></v-text-field>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-text-field
                            v-model="memberSelect.img_src"
                            :rules="nameRules"
                            label="image source"
                            required
                        ></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex justify-content-end">
                    <button class="btn btn-success">บันทึกข้อมูล</button>
                </v-col>
            </v-row>
            </form>
        </section>
        <section class="pt-15" v-else>
              <h2 class="text-center text--disabled">โปรดเลือกสมาชิกที่จะแก้ไข</h2>
        </section>
    </v-container>
    
  </v-main>
</template>
<script>
export default {
    data() {
        return {
            headers :["name","last date","expire date","action"],
            memberSelect : ""
        }
    }
}
</script>

<style scoped>
.btn-table {
    width: 80px ;
}
</style>