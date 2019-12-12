<template>
  <div>
    <div class="q-ma-md">
      <grid page="/ketentuanTest/TO UN 621" title="TO UN" caption="Kode 621" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UN 622" title="TO UN" caption="Kode 621" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UTBK 721" title="TO UTBK" caption="Kode 721" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UTBK 722" title="TO UTBK" caption="Kode 721" benar="30" salah="42" score="420"/>
    </div>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn rounded icon="sort" color="secondary" label="Urutkan" no-caps/>
    </q-page-sticky>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/rapot/history.vue";
export default {
  components: {
    grid
  }
};
</script>