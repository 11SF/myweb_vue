<template>
  <header>
    <v-toolbar-title color="black" dark>
      <v-toolbar-title>11SF</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Open jobs</v-btn>
        <v-btn flat class="pink lighten-3">Sign In</v-btn>
      </v-toolbar-items>
    </v-toolbar-title>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 0.5s ease;
  z-index: 1000;
}
</style>