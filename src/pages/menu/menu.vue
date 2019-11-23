<template>
  <center>
    <div class="q-ma-md">
      
      <grid1
        title="Modul"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/modul/Modul"
        color="blue"
        imgurl="statics/img/g4.png"
      />

      <grid2
        title="POST TEST"
        caption="Evaluasi belajar kamu disini. Pastikan kamu dapat sesuatu!"
        page="/"
        color="orange"
        imgurl="statics/img/g5.png"
      />

      <grid1
        title="TRY OUT"
        caption="Persiapkan masa depan kamu dengan rajin-rajin try out."
        page="/signup"
        color="cyan"
        imgurl="statics/img/g6.png"
      /> 

      <grid2
        title="BANK SOAL"
        caption="Referensi soal UTBK, Ujian Mandiri, Swasta dan Kedinasan."
        page="/signup"
        color="dark-blue"
        imgurl="statics/img/g7.png"
      /> 

      <grid1
        title="KONSUL"
        caption="Ada soal yang gak hisa atau gak bisa-bisa konse? Konsulkan kegundahanmu disini."
        page="/signup"
        color="orange"
        imgurl="statics/img/g8.png"
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
import grid1 from "components/menu/menu1.vue";
import grid2 from "components/menu/menu2.vue";
export default {
  components: {
    grid1,
    grid2
  }
};
</script>