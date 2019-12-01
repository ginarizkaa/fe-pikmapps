<template>
  <center>
    <div class="q-ma-md">
      <grid
        title="Kelas 9"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/pp/postTest/Kelas 9"
        imgtext="XI"
        imgurl="statics/img/g6.png"
      />
      <grid
        title="Kelas 10"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/pj/postTest/Kelas 10"
        imgtext="X"
        imgurl="statics/img/g7.png"
      />
      <grid
        title="Kelas 11"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/pj/postTest/Kelas 11"
        imgtext="XI"
        imgurl="statics/img/g8.png"
      />
      <grid
        title="Kelas 12"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/pj/postTest/Kelas 12"
        imgtext="XII"
        imgurl="statics/img/g9.png"
      />
      <grid
        title="Intensif"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="0"
        imgurl="statics/img/g10.png"
      />
    </div>
  </center>
</template>
<style lang="stylus">
.my-card {
  margin-bottom: 15px;
  height: 90px;
}
</style>
<script>
import grid from "components/postTest/cPostTest.vue";
export default {
  components: {
    grid
  }
};
</script>