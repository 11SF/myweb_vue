<template>
  <v-app>
    <Navbar/>
    <div class="container">
    <div class="header">
      <v-img
        class="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
        height="180"
        width="180"
      ></v-img>
      <div class="text-header">
        <v-text class="display-3 font-weight-bold">Spotify Member</v-text>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="d-flex justify-end">
      <button class="btn btn-outlined btn-primary" v-if="$store.getters.getUserData.userLevel == 'admin'" @click="goAdminPage()">AdminPage</button>
    </div>
    <v-row v-if="$store.getters.getMembersData == 'No Data'">
      <v-col lg="12">
        <h1 class="text-center">{{$store.getters.getMembersData}}</h1>
      </v-col>
    </v-row>
    <v-row justify-md="space-around" justify-xs="" class="mt-6 mb-6 content pa-5" v-else>
      <v-col sm="12" md="5" v-for="member in $store.getters.getMembersData" :key="member">
        <v-card max-width="500px" class="pa-5 mx-auto">
          <v-list-item>
            <v-row justify="center">
              <v-col cols="12" lg="5" align-center>
                <v-list-item-avatar size="100" class="mx-auto d-flex">
                    <v-avatar size="100">
                      <img alt="user" :src="member.img_src" />
                    </v-avatar>
                </v-list-item-avatar>
              </v-col>
              <v-col cols="12" lg="7">
                <v-row>
                  <v-col cols="12">
                      <v-list-item-title class="headline mb-3">{{ member.name }}</v-list-item-title>
                      <v-list-item-subtitle><h6>จ่ายล่าสุด : {{member.lastDate}}</h6></v-list-item-subtitle>
                      <v-list-item-subtitle><h6>หมดอายุ : {{member.expireDate}}</h6></v-list-item-subtitle>
                      <!-- <v-list-item-subtitle>เดือนคงเหลือ : {{calculateMonthBalance(member)}}</v-list-item-subtitle>                               -->
                  </v-col>
                </v-row>  
              </v-col>
              <v-col cols="12">
                <v-alert
                type="error"
                max-width="500"
                class="pa-1"
                v-if="getAlert(member) === 'late'"
              >
                เลยกำหนดจ่าย
              </v-alert>
              <v-alert
                type="warning"
                max-width="500"
                class="pa-1"
                v-else-if="getAlert(member) === 'inTime'"
              >
                ถึงกำหนดจ่าย
              </v-alert>
              <v-alert
                type="success"
                max-width="500"
                class="pa-1"
                v-else-if="getAlert(member) === 'good'"
              >
                สมาชิกที่ดี
              </v-alert>
              </v-col>
            </v-row>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="pa-4">
      <v-col md="5" sm="12">
        <v-img v-bind:src="getPP_picture()" max-width="300" class="mx-auto">
        </v-img>
      </v-col>
      <v-col lg="5">
        <v-card max-width="400" class="mx-auto">
          <v-card-title>ราคาต่อเดือน</v-card-title>
          <v-card-text class="mx-auto">
            <v-chip-group
              v-model="price"
              active-class="deep-purple accent-4 white--text align-center"
              column
            >
              <v-chip>1 เดือน</v-chip>
              <v-chip>2 เดือน</v-chip>
              <v-chip>3 เดือน</v-chip>
              <v-chip>6 เดือน</v-chip>
              <v-chip>12 เดือน</v-chip>
            </v-chip-group>
            <v-card-title>{{ getPrice() }} บาท</v-card-title>
          </v-card-text>
        </v-card>
        <v-card max-width="400" class="mx-auto mt-13">
          <v-card-title>พร้อมเพย์ : 0940932105</v-card-title>
          <v-card-actions>
            <v-btn
              elevation="2"
              @click="clipboard()"
              block
              color="deep-purple"
              dark
              >Copy</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar2'
export default {
  name : 'SpotifyMember',
  components: {
    Navbar
  },
  methods: {
    clipboard() {
      let a = "0940932105";
      navigator.clipboard.writeText(a);
    },
    getPrice() {
      if (this.price == 0) {
        this.pp_picture = "pp_35.jpg";
        return 35;
      } else if (this.price == 1) {
        this.pp_picture = "pp_70.jpg";
        return 70;
      } else if (this.price == 2) {
        this.pp_picture = "pp_105.jpg";
        return 105;
      } else if (this.price == 3) {
        this.pp_picture = "pp_210.jpg";
        return 210;
      } else {
        this.pp_picture = "pp_420.jpg";
        return 420;
      }
    },
    getPP_picture() {
      if (this.price == 0) {
        return require("../assets/pp_35.jpg");
      } else if (this.price == 1) {
        return require("../assets/pp_70.jpg");
      } else if (this.price == 2) {
        return require("../assets/pp_105.jpg");
      } else if (this.price == 3) {
        return require("../assets/pp_210.jpg");
      } else {
        return require("../assets/pp_420.jpg");
      }
    },
    goAdminPage() {
      this.$router.push({
        path: '/spotify/admin'
      })
    },
    getAlert(member) {
      let date  = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear() + 543;

      let temp  = member.expireDate.split("/");
      if (temp[1] > month || year < temp[2]) {
        return 'good'
      } else if (temp[1] == month) {
        return 'inTime'
      } else {
        return 'late'
      }
    },
    // calculateMonthBalance(member) {
    //   let date  = new Date();
    //   let stringDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() + 543}`   

    //   let monthBalance = 0;
    //   let a = member.expireDate.split("/")
    //   let expireDate = `3/${a[1]}/${a[2]}`;
    //   while(!(stringDate === expireDate)) {
    //     monthBalance += 1;
    //     let a  = stringDate.split("/");
    //     let int = parseInt(a[1]) + 1;
    //     if (int > 12) {
    //       int = 1;
    //       let year = parseInt(a[2]) + 1;
    //       stringDate = `${a[0]}/${int}/${year}`;
    //     } else {
    //       stringDate = `${a[0]}/${int}/${a[2]}`;
    //     }
    //   }
    //   return monthBalance
    // }
  },
  data() {
    return {
      ticksLabels: ["1 เดือน", "3 เดือน", "6 เดือน", "12 เดือน"],
      price: 0,
      pp_picture: "pp_35.jpg",
    };
  },
  created() {
    this.$store.dispatch('fetchMembersData');
  }
};
</script>

<style>
.text-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;
}
.container {
  margin: 0px auto;
}
.header .img {
  margin: 0 auto;
}
.header {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
}
.content {
  margin: 0 auto;
}
</style>