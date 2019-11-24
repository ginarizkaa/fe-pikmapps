<template>
  <div>
    <div class="bg-bluee">
      <div class="q-mx-md q-pt-lg">
        <div class="row">
          <div class="col-9 q-pr-xs">
            <div
              class="yellow"
            >Jas merah. Jangan sekali-sekali melupakan sejarah. Pelajari soal-soal tahun lalu!</div>
          </div>
          <div class="col-3 q-pr-lg">
            <img style="height:70px;" src="statics/img/g8.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="q-ma-md">
      <grid page="/" title="SBMPTN 2011" color="white" class="bg-bankSoal"/>
      <grid page="/" title="SBMPTN 2012" color="white" class="bg-bankSoal"/>
      <grid page="/" title="SBMPTN 2013" color="white" class="bg-bankSoal"/>
      <grid2 page="/" title="SBMPTN 2014" color="white" class="bg-bankSoal"/>
      <grid2 page="/" title="UJIAN TULIS UGM 2014" color="white" class="bg-bankSoal"/>
      <grid2 page="/" title="SIMAK UI 2014" color="white" class="bg-bankSoal"/>
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