<template>
  <v-parallax
    src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/97116270_2832092560193178_936624816981540864_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEvT_j9_Z_r6e5n7nUfXcTdEewKlTszdOAR7AqVOzN04C6lkol250NXq6j_ef2XTe2qZNGHojJNSRy_-c7UYgpG&_nc_ohc=Pp6R2e_w7V0AX8n0OJr&_nc_ht=scontent.fbkk5-7.fna&oh=67c70f35d2f3c963843cc8bc0c71683c&oe=607B320E"
    height="800"
    pa-1
    dark
  >
    <v-layout column align-center justify-center data-aos="fade-down" data-aos-duration="2000">
            <p class="header">Hello, World</p>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Unlesh your creativity without limitations</div>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap");
.wrap {
  margin: 0 0;
  padding: 0 0;
  height: 750px;
  width: 100%;
}
v-parallax {
  height: 750px;
}
.container {
  max-width: 980px;
  display: flex;
  justify-content: center;
}
.header {
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 50pt;
}
</style>