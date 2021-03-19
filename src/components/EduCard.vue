<template>
  <v-card
    :loading="loading"
    class=" my-12"
    width="324"
    elevation="10"
    rounded="xl"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="190"
      src="https://www.triamudomsouth.ac.th/images/triamudom/DSC04219.jpg"
    ></v-img>

    <v-card-title>โรงเรียนเตรียมอุดมศึกษาภาคใต้</v-card-title>
    <v-card-text>
      <div class="subtitle-1 mb-4">มัธยมศึกษาตอนปลาย</div>
      <v-row align="center" class="mx-0"> </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>แผนการเรียน: วิทย์-คณิต</v-card-title>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Go to </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>