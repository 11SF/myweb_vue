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
            <td>{{ member.name }}</td>
            <td>{{ member.lastDate }}</td>
            <td>{{ member.expireDate }}</td>
            <td>
              <button class="btn btn-danger btn-table" @click="memberSelect = member">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
          <section class="bg-light pa-5" v-if="$store.getters.getMembersData.length < 6">
            <h2>ข้อมูลสมาชิก</h2>
            <form>
                <v-row>
                    <v-col cols="12" lg="6">
                        <v-text-field
                                v-model="form.name"
                                :rules="nameRules"
                                label="name"
                                required
                            ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-text-field
                                v-model="form.name"
                                label="expire Date (3/M/2564)"
                                required
                            ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="12">
                        <v-text-field
                                v-model="form.img_src"
                                label="image source"
                                required
                            ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-content-end">
                        <button class="btn btn-success" @click="save">บันทึกข้อมูล</button>
                    </v-col>
                </v-row>
            </form>
        </section>
         <section class="pt-15" v-else>
              <h2 class="text-center text--disabled">ไม่สามารถเพิ่มสมาชิกได้</h2>
              <h5 class="text-center text--disabled">เนื่องจากสมาชิกเต็ม 6 คน</h5>
        </section>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  name: "Add member",
  data() {
    return {
      name: "",
      form: {
        name: "",
        lastDate: "-",
        expireDate: "",
        img_src: "",
      },
      memberSelect: "",
    };
  },
  methods: {
    async save() {
      let res = await axios.post(
        "https://mysitebackend.herokuapp.com/api/admin/members/add",
        this.form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        }
      );
      if (res.data.status == true) {
        (this.form.name = ""),
          (this.form.lastDate = "-"),
          (this.form.expireDate = ""),
          (this.form.img_src = "");
      }
    },
  },
};
</script>

<style scoped>
.btn-table {
    width: 80px ;
}
</style>