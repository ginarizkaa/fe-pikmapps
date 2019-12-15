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
      <grid page="/sbmptn/SBMPTN 2011" title="UTBK 2019"/>
      <grid page="/sbmptn/SBMPTN 2011" title="UTBK 2018"/>
      <grid page="/sbmptn/SBMPTN 2011" title="SBMPTN 2017"/>
      <grid page="/sbmptn/SBMPTN 2011" title="SBMPTN 2016"/>
      <grid page="/sbmptn/SBMPTN 2011" title="SBMPTN 2015"/>
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/bankSoal/cbankSoal.vue";
export default {
  components: {
    grid
  },
};
</script>