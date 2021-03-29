<template>
  <v-app>
    <!-- <Navbar/> -->
    <!-- <div class="container">
      <header>
        <v-row>
          <v-col cols="12" class="text-center py-10">
            <h1>Member Management</h1>
          </v-col>
        </v-row>
      </header>
      <section>
        <v-row justify="end" align-content="center" class="ml-auto pa-0">
          <v-col cols="1">
            <v-btn class="mx-2"  dark color="indigo">
              Add user
            </v-btn>
          </v-col>
        </v-row>
      </section>

      <section>
        <v-col cols="12">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left table-header-text">ชื่อ</th>
                <th class="text-left table-header-text">วันที่จ่ายล่าสุด</th>
                <th class="text-left table-header-text">วันหมดอายุ</th>
                <th class="text-left table-header-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in $store.getters.getMembersData" :key="member">
                <td>{{member.name}}</td>
                <td>{{member.lastDate}}</td>
                <td>{{member.expireDate}}</td>
                <td>
                  <v-btn class="mx-2" fab dark color="light-green">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </section>
    </div> -->
    <header class="bg-light">
      <div class="container-fluid">
        <h1 class="text-center">Member Management</h1>
      </div>     
    </header>
    <section class="workspace">
      <div class="container">
        <div class="d-flex justify-content-end mb-5">
          <button class="btn btn-success" @click="goAddmember()">add user</button> 
        </div>
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <td>ชื่อ</td>
                <td>วันที่จ่ายล่าสุด</td>
                <td>วันหมดอายุ</td>
                <td>ยอดเดือนคงเหลือ</td>
                <td>เพิ่มเดือน</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in membersData" :key="member" class="align-middle">
                <td >{{member.name}}</td>
                <td>{{member.lastDate}}</td>
                <td>{{convertDate(member.expireDate)}}</td>
                <td>{{member.countMonth}}</td>
                <td>
                  <v-btn class="mx-2" fab dark color="light-green" @click="pushCount(member)">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab dark color="red" @click="deCount(member)">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn class="mx-2" fab dark color="light-blue" @click="updateData(member)">
                    <v-icon dark> mdi-check-all </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row justify-center">
            <div class="col-4 d-flex justify-center">            
                <button class="btn btn-primary me-5" @click="saveData()">Save</button>
                <button class="btn btn-danger">Clear</button>            
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
// import axios from 'axios';
// import Navbar from '../components/Navbar2.vue'
export default {
  components: {
    // Navbar
  },
  data() {
    return {
      membersData : this.$store.getters.getMembersData
    }
  },
  methods: {
    pushCount(member) {
      member.countMonth += 1
      let a = member.expireDate.split('/')
      let int = parseInt(a[1]) + 1
      member.expireDate = `${a[0]}/${int}/${a[2]}`
    },
    deCount(member) {
      member.countMonth -= 1
      let a = member.expireDate.split('/')
      let int = parseInt(a[1]) - 1
      member.expireDate = `${a[0]}/${int}/${a[2]}`
    },
    convertDate(date) {
      return date
    },
    goAddmember() {
      this.$router.push({
        path : "/spotify/admin/addmember"
      })
    },
    // updateData(data) {
    //   // let res = axios.put('/api/member/updatemember',data)
    // }
  }
};
</script>

<style scoped>
header {
  padding-top: 5rem;
  padding-bottom: 5rem;

}
.container {
  width: 960px;
}
tbody tr {
  height: 200px;
}
tbody tr td {
  font-size: 18px !important;
}
.table-header-text {
  font-size: 18px !important;
}
</style>