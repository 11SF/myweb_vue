<template>
  <div class="home">
    <LandingPage/>
    <div class="space"></div>
    <div class="container">
      <Avatar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "../components/LandingPage"
import Avatar from "../components/avatar"
export default {
  name: "Home",
  components: {
    LandingPage,
    Avatar
  },
};
</script>

<style scoped>
.space {
  height: 250px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 62%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.55) 100%);
}
</style>
