<template>
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
    <!-- <v-card class="mt-5 pa-5"> -->
    <v-row justify="space-around" class="mt-6">
      <v-col lg="5" v-for="member in list_item" :key="member">
        <v-card max-width="500px">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ member.name }}
              </v-list-item-title>
              <v-list-item-subtitle>จ่ายล่าสุด : วว/ดด/ปปปป</v-list-item-subtitle>
              <v-list-item-subtitle>ถึงเวลาจ่ายแล้ว/ยังไม่ถึงเวลาจ่าย..แต่จะจ่ายก็ได้</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar size="100">
              <v-avatar size="100">
                <img
                  alt="user"
                  :src="member.img_src"
                />
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          name: "Nawapong Sitaruno",
          lastDate: "2/3/2564",
          countMonth: "0",
          img_src : "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/107698195_2967815813287518_541907919760258090_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=zACpTZyDvEcAX9gUrda&_nc_ht=scontent.fbkk5-7.fna&oh=83727be87c32779b7f7cebadb76ca1c9&oe=607CAD98"
        },
        {
          name: "MrNonDark",
          lastDate: "2/3/2564",
          countMonth: "0",
          status: "angry",
          pay: "click",
        },
        {
          name: "Only_Golf",
          lastDate: "2/3/2564",
          countMonth: "0",
          status: "angry",
          pay: "click",
        },
        {
          name: "Porr",
          lastDate: "2/3/2564",
          countMonth: "0",
          status: "angry",
          pay: "click",
        },
        {
          name: "nayvintage",
          lastDate: "2/3/2564",
          countMonth: "0",
          status: "angry",
          pay: "click",
        },
        {
          name: "nayvintage",
          lastDate: "2/3/2564",
          countMonth: "0",
          status: "angry",
          pay: "click",
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
}
.container {
  margin: 30px auto;
}
.header .img {
  margin: 0 auto;
}
.header {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
}
</style>