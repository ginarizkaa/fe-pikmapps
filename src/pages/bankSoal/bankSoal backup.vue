<template>
  <div>
    <div class="bg-orange2">
      <q-btn flat icon="img:statics/icon/back2.png" @click="$router.go(-1)" style="margin:18px;" />
      <div class="font3 blue fs40" style="margin-left:30px;margin-top:-30px">
        BANK
        <img style="height:50px;" src="statics/img/g8.png" />SOAL
      </div>
      <div
        class="blue font2"
        style="margin-left:30px;margin-top:-15px"
      >Jas merah. Jangan sekali-sekali melupakan sejarah. Pelajari soal-soal tahun lalu!</div>
    </div>
    <div class="q-ma-md">
      <grid page="/sbmptn/SBMPTN 2011" title="SBMPTN 2011" color="white" class="bg-bankSoal"/>
      <grid page="/sbmptn/SBMPTN 2012" title="SBMPTN 2012" color="white" class="bg-bankSoal"/>
      <grid page="/sbmptn/SBMPTN 2013" title="SBMPTN 2013" color="white" class="bg-bankSoal"/>
      <grid2  title="SBMPTN 2014" color="white" class="bg-bankSoal"/>
      <grid2  title="UJIAN TULIS UGM 2014" color="white" class="bg-bankSoal"/>
      <grid2  title="SIMAK UI 2014" color="white" class="bg-bankSoal"/>
      
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/pelajaran/cpelajaran.vue";
import grid2 from "components/bankSoal/cbankSoalLock.vue";
export default {
  components: {
    grid,
    grid2
  },
};
</script>