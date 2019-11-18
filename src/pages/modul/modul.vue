<template>
  <center>
    <div class="q-ma-md">
      <grid
        title="Kelas 9"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="XI"
      />
      <grid
        title="Kelas 10"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="X"
      />
      <grid
        title="Kelas 11"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="XI"
      />
      <grid
        title="Kelas 12"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="XII"
      />
      <grid
        title="Intensif"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/"
        imgtext="0"
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
import grid from "components/cmodul.vue";
export default {
  components: {
    grid
  }
};
</script>