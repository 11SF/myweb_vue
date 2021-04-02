<template>
    <v-main>
      <section class="pa-10">
        <v-card
          color="red darken-1"
          class="pa-10"
          dark
          img="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        >
          <div class="d-flex align-center justify-content-between">
            <h1>เลยกำหนดจ่าย</h1>
            <h2 class="mb-0">100 คน</h2>
          </div>
        </v-card>
      </section>
      <section class="pa-10">
        <v-row>
          <v-col
            md="6"
            v-for="member in $store.getters.getMembersData"
            :key="member"
          >
            <v-card class="pa-5 mx-auto">
              <v-list-item>
                <v-row class="fill-height">
                  <v-col
                    align-self="start"
                    class="pa-0 d-flex justify-content-center mb-lg-4"
                    cols="12"
                    lg="4"
                  >
                    <!-- <v-list-item-avatar size="100"> -->
                    <!-- <v-avatar size="100"> -->
                    <!-- <img alt="user" :src="member.img_src" /> -->
                    <!-- </v-avatar> -->
                    <!-- </v-list-item-avatar> -->

                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img :src="member.img_src"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="d-flex">
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">
                        {{ member.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >จ่ายล่าสุด :
                        {{ member.lastDate }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle
                        >หมดอายุ : {{ member.expireDate }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle
                        >เดือนคงเหลือ :
                        {{ member.countMonth }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-col>
                </v-row>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-row class="align-center" justify-lg="between">
                  <v-col cols="12" lg="6">
                    <v-list-item-subtitle>
                      เพิ่มเดือน : {{ member.countMonth }} เดือน
                    </v-list-item-subtitle>
                  </v-col>

                  <v-col cols="12" lg="6" class="d-flex justify-content-end">
                    <div class="btn-group">
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="indigo"
                        @click="pushCount(member)"
                      >
                        <v-icon dark> mdi-plus </v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="red"
                        @click="deCount(member)"
                      >
                        <v-icon dark> mdi-minus </v-icon>
                      </v-btn>

                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="green"
                        @click="dialog = true"
                      >
                        ยืนยัน
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-list-item>

              <v-divider></v-divider>

              <!-- <v-list-item>
                <v-btn elevation="2" color="warning" dark>แก้ไขข้อมูล</v-btn>
              </v-list-item> -->
              <v-list-item>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      ตัวเลือกเพิ่มเติม
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row>
                        <v-col cols="6" class="d-flex justify-content-end">
                          <v-btn elevation="2" color="warning" dark>แก้ไขข้อมูลผู้ใช้</v-btn>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-content-end">
                          <v-btn elevation="2" color="red" dark>ลบผู้ใช้</v-btn>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            จะดำเนินการเพิ่มเดือนให้ {{}}
          </v-card-title>
          <v-card-text
            >Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are
            running.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="(dialog = false), updateData(member)"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
</template>

<script>
import axios from "axios";

export default {
    data() {
    return {
      membersData: this.$store.getters.getMembersData,
      dialog: false,
      isAgree: false,
    };
  },
  methods: {
    pushCount(member) {
      member.countMonth += 1;
      let a = member.expireDate.split("/");
      let int = parseInt(a[1]) + 1;
      if (int > 12) {
        int = 1;
        let year = parseInt(a[2]) + 1;
        member.expireDate = `${a[0]}/${int}/${year}`;
        return;
      }
      member.expireDate = `${a[0]}/${int}/${a[2]}`;
    },
    deCount(member) {
      member.countMonth -= 1;
      let a = member.expireDate.split("/");
      let int = parseInt(a[1]) - 1;
      member.expireDate = `${a[0]}/${int}/${a[2]}`;
    },
    convertDate(member) {
      return member;
    },
    goAddmember() {
      this.$router.push({
        path: "/spotify/admin/addmember",
      });
    },
    async updateData(member) {
      let res = await axios.put(
        "http://localhost:5000/api/member/updatemember",
        member
      );
      this.updateStatus(res);
    },
    updateStatus(res) {
      if (res.data.status === "success") return true;
      else return false;
    },
  },
}
</script>

<style>

</style>