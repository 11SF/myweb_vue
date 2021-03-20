<template>
  <div class="home">
    <Navbar/>
    <LandingPage />
    <div class="container">
      <div class="box-content">
        <v-row align-sm="center" justify="space-between">
          <v-col lg="5" xs="12">
            <div class="content">
              <Avatar />
            </div>
          </v-col>
          <v-col lg="5" xs="12">
            <div class="content">
              <div class="text">
                <h1>Nawapong Sitaruno</h1>
                <h2>นวพงศ์ สิตะรุโณ</h2>
                <h3>11SF</h3>
                <p>Thammasat University</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
    </div>
    <!-- <v-parallax
      src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/51755749_1976399059095870_4204152677837307904_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeENWiNvGEtTycvqdVI98Ao8luJ8AyGku9KW4nwDIaS70nFNvsdJT3IbGXz-bLmuPqc4iLE1cgGJLbOJOUyxJ7W6&_nc_ohc=qyXqU3KPngoAX-6Wbi8&_nc_ht=scontent.fbkk5-3.fna&oh=b7ba482e8b9ee55dd9f56b48388c898a&oe=607B1AFD"
    height="700"
    > -->
      <div class="box-content container">
        <v-row justify="center">
          <v-col lg="12">
            <p class="text-header">การศึกษา</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-col lg="4">
                <div class="card">
                  <EduCard />
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col lg="4">
                <div class="card">
                  <EduCard />
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col lg="4">
                <div class="card">
                  <EduCard />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    <!-- </v-parallax> -->
    <div class="box-content"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "../components/LandingPage";
import Avatar from "../components/avatar";
import EduCard from "../components/EduCard";
import Navbar from "../components/Navbar1"
export default {
  name: "Home",
  components: {
    LandingPage,
    Avatar,
    EduCard,
    Navbar
  },
};
</script>

<style scoped>
.container {
  max-width: 980px;
}
.box-content {
  margin: 80px auto;
}
.content {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.text {
  max-width: 300px;
  margin: 0 auto;
}
.text-header {
  font-weight: 600;
  font-size: 40px;
  color: black;
  text-align: center;
}
.card {

}
</style>
