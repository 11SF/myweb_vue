<template>
  <div class="wrap" data-aos="fade-down" data-aos-duration="1500">
    <div class="container">
      <div class="header" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
        <p>Hello, World</p>
        <v-divider dark></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LandingPage"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap");
.wrap {
  margin: 0 0;
  padding: 0 0;
  background-image: url("https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/48926246_1920200648049045_7409732777978888192_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHeupPPrekTJ8bnZ9OoMgW17UdFyAm9oQftR0XICb2hB0zOQgvr4m7qv9yf2BZBqcHqZgsqtBDIoH4HXnVxGu2c&_nc_ohc=yfFy4yNyB0wAX9Y5eb-&_nc_ht=scontent.fbkk5-5.fna&oh=0b452117c8aea0bda5e9826269787bb6&oe=607A4D99");
  background-position: right;
  width: 100%;
}
.container {
  max-width: 960px;
  height: 750px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header {
  max-width: 400px;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 50pt;
}
</style>