<template>
  <div class="card">
    <div class="avatar"></div>
    <div class="text">
        <h1>Nawapong Sitaruno</h1>
        <h3>11SF</h3>
        <p>CSTU'Pee34</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "avatar",
};
</script>

<style scoped>
.card {
    height: 500px;
    max-width: 350px;
    background-color: whitesmoke;
    border-radius: 25px;
}
.avatar {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  width: 350px;
  height: 250px;
  background-image: url("https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/107698195_2967815813287518_541907919760258090_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=62C7G-SH_88AX_jWhZk&_nc_ht=scontent.fbkk5-7.fna&oh=959fba9f1ca3628f7b5a77a1863a5022&oe=6078B918");
  background-position: center;
  background-size: cover;
  padding: 0 -20px;
}
.text {
    color:black;
}
</style>

