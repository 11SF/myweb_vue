<template>
    <v-main>
      <section class="pa-10">    
          <v-row>
            <v-col cols="12" lg="6">
              <v-card
                class="pa-10"
                dark
                color="yellow darken-2"
              >
                    <div class="d-flex align-center justify-content-between">
                      <h1>ถึงกำหนดจ่าย</h1>
                      <h2 class="mb-0">{{inTime}}</h2>
                    </div>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card
                color="red darken-3"
                class="pa-10"
                dark
              >
                    <div class="d-flex align-center justify-content-between">
                      <h1>เลยกำหนดจ่าย</h1>
                      <h2 class="mb-0">{{late}}</h2>
                    </div>
              </v-card>
            </v-col>
          </v-row>
       
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
                <v-row class="fill-height" justify="center">
                  <v-col
                    align-self="middle"
                    class=" mb-lg-4 d-flex justify-center"
                    sm="12"
                    lg="6"
                  >
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img :src="member.img_src"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="d-flex pa-10" sm="12" lg="6">
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
                      <!-- make function for calculate balance month -->
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
                        @click="dialog = true, memberSelect = member"
                      >
                        ยืนยัน
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      ตัวเลือกเพิ่มเติม
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row>
                        <v-col cols="12" lg="6" class="d-flex justify-content-end">
                          <v-btn elevation="2" color="warning" block dark>แก้ไขข้อมูลผู้ใช้</v-btn>
                        </v-col>
                        <v-col cols="12" lg="6" class="d-flex justify-content-end">
                          <v-btn elevation="2" color="red" block dark>ลบผู้ใช้</v-btn>
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
            แน่ใจนะ 🤔
          </v-card-title>
          <v-card-text
            >คุณต้องการดำเนินการเพิ่มเดือนให้ {{memberSelect.name}} เป็นจำนวน {{memberSelect.countMonth}} เดือนใช่ไหม</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false,memberSelect ='' ">
              Disagree
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="(dialog = false), updateData(memberSelect),memberSelect ='' "
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
      memberSelect : '',
      inTime : 0,
      late : 0,
      good : 0,
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
      let date = new Date();  
      let stringDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() + 543}`   
      let res = await axios.put(
          "https://mysitebackend.herokuapp.com/api/admin/members/edit/date/",
          {
            'id'            : member._id,
            'lastDate'      : stringDate,
            'expireDate'    : member.expireDate
          },
          {
            headers : {
             'Authorization': `Bearer ${localStorage.getItem('userKey')}`
          },
        }
      );
      if (res.data.status) {
        member.countMonth = 0;
        this.$store.dispatch("fetchMembersData");
      }
    },
    getAlert(members) {
      let date  = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear() + 543;

      members.array.forEach(element => {
        let temp  = element.expireDate.split("/");
        if (temp[1] > month || year < temp[2]) {
          this.good += 1
        } else if (temp[1] == month) {
          this.inTime += 1
        } else {
          this.late += 1
        }
      });
    },
  },
  computed:{
    loadingStatus() {
        return this.$store.getters.getMembersData
    }
  },
  watch: {
    loadingStatus(newStatus) {
        if(!(newStatus === ''))
          this.getAlert(this.$store.getters.getMembersData)
    }
  }
};
</script>
