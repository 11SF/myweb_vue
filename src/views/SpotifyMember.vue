<template>
  <v-app>
    <Navbar/>
    <div class="container">
      <v-text>count: {{counter}} || aa : {{hello}} ||</v-text>
      <v-btn @click="count()">+</v-btn>
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
    <v-row justify-md="space-around" justify-xs="" class="mt-6 mb-6 content">
      <v-col sm="12" md="5" v-for="member in list_item" :key="member">
        <v-card max-width="500px" height="170px" class="pa-5 mx-auto">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ member.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >จ่ายล่าสุด : วว/ดด/ปปปป</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >หมดอายุ : วว/ดด/ปปปป</v-list-item-subtitle
              >
              <v-list-item-subtitle>เดือนคงเหลือ : 10</v-list-item-subtitle>
              <v-alert
                type="error"
                max-width="200"
                class="pa-1"
                v-if="member.countMonth == -1"
              >
                เลยกำหนดจ่าย
              </v-alert>
              <v-alert
                type="warning"
                max-width="200"
                class="pa-1"
                v-else-if="member.countMonth == 0"
              >
                ถึงกำหนดจ่าย
              </v-alert>
            </v-list-item-content>
            <v-list-item-avatar size="100">
              <v-avatar size="100">
                <img alt="user" :src="member.img_src" />
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
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
  components: {
    Navbar
  },
  methods: {
    count() {
      this.counter += 1
    },
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
  },
  updated() {
      let a = localStorage.getItem('userKey')
      if(a != null)
        this.hello = "Nawapong Sitaruno" 
        else {
        this.hello = "" 
        }
    },
  data() {
    return {
      counter : 0,
      hello : "",
      ticksLabels: ["1 เดือน", "3 เดือน", "6 เดือน", "12 เดือน"],
      price: 0,
      pp_picture: "pp_35.jpg",
      table_header: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "วันที่จ่ายล่าสุด",
          value: "lastDate",
          sortable: false,
          image: " mdi-alarm",
        },
        { text: "ค้างจ่าย (เดือน)", value: "countMonth", sortable: false },
        { text: "สถานะ", value: "status", sortable: false },
        { text: "ชำระงิน", value: "pay", sortable: false },
      ],
      list_item: [
        {
          name: "11SF",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "0",
          img_src:
            "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/107698195_2967815813287518_541907919760258090_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=zACpTZyDvEcAX9gUrda&_nc_ht=scontent.fbkk5-7.fna&oh=83727be87c32779b7f7cebadb76ca1c9&oe=607CAD98",
        },
        {
          name: "MrNonDark",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "-1",
          img_src:
            "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/161301907_3623357261120428_687880429245692114_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGh4kauc9uVV8-m-IwbfZQLgiEoyHAQ8EOCISjIcBDwQ9kLa4L6l-1qK_--baaeW1VGGqGXA_qSpkXy6JYYv0ra&_nc_ohc=ogobe3_RRNUAX-Y9sN3&_nc_ht=scontent.fbkk5-3.fna&oh=2c502422208ac9bf752d05864bc030d0&oe=6079B6C9",
        },
        {
          name: "Only_Golf",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "1",
          img_src:
            "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/161301907_3623357261120428_687880429245692114_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGh4kauc9uVV8-m-IwbfZQLgiEoyHAQ8EOCISjIcBDwQ9kLa4L6l-1qK_--baaeW1VGGqGXA_qSpkXy6JYYv0ra&_nc_ohc=ogobe3_RRNUAX-Y9sN3&_nc_ht=scontent.fbkk5-3.fna&oh=2c502422208ac9bf752d05864bc030d0&oe=6079B6C9",
        },
        {
          name: "ปอ ค้าบบบบบบ",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "1",
          img_src:
            "https://cdn.discordapp.com/attachments/769239968744603770/822823214023180338/image0.jpg",
        },
        {
          name: "Nayvintage",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "0",
          img_src: "https://cdn.discordapp.com/attachments/700750908635611247/822828114882986034/IMG_0440.jpeg",
        },
        {
          name: "ryuxx",
          lastDate: "2/3/2564",
          expireDate : "2/3/2564",
          countMonth: "0",
          img_src: "https://cdn.discordapp.com/attachments/711603551302058065/822822687680102460/IMG_0237.jpg",
        },
      ],
    };
  },
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