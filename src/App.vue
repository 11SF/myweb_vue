<template>
  <v-app> 
    <v-app-bar color="black" fixed dark>
      <div class="container">
        <div class="item">
          <a href="/" id="logo">11SF</a>
        </div>
        <v-tabs align-with-title background-color="black">
            <v-tab><router-link to="/" id="menu"> Page 1 </router-link></v-tab>
            <v-tab><router-link to="/about" id="menu"> Page 2 </router-link></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <div class="item">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
        <div class="item">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </div>
        <div class="item">
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

      <div class="wrap-content">
        <router-view></router-view>
      </div>

  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
v-app {
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
}
.container {
  display: flex;
  padding: 0;
}
.item {
  display: inline-block;
  align-items: center;
  margin: auto;
}
.group-menu {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
#logo {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
#menu {
  text-decoration: none;
  color: white;
}
.wrap-content {
  margin-top: 50px;
}
</style>
