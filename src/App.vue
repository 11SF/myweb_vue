<template>
  <v-app>
    <Navbar />
    <div class="wrap">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar1";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,400;0,600;1,400&display=swap");
* {
  font-family: 'Kanit', sans-serif;
}
v-app {
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
}
.wrap {
  margin: 0 auto;
  width: 100%;
  padding-top: 3rem;
}
</style>
