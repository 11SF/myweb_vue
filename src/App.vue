<template>
  <v-app>

      <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  created() {
    this.$store.dispatch('checkLogin')
  }
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
</style>
