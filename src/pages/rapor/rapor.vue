<template>
  <div>
    <div class="q-ma-md" v-if="urutkan">
      <q-select v-model="model" :options="options" label="Urutkan" />
      <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-btn rounded icon="sort" color="secondary" label="Urutkan" no-caps @click="sort2()"/>
      </q-page-sticky>
    </div>
    <div class="q-ma-md" v-if="!urutkan">
      <grid page="/ketentuanTest/TO UN 621" title="TO UN" caption="Kode 621" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UN 622" title="TO UN" caption="Kode 621" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UTBK 721" title="TO UTBK" caption="Kode 721" benar="30" salah="42" score="420"/>
      <grid page="/ketentuanTest/TO UTBK 722" title="TO UTBK" caption="Kode 721" benar="30" salah="42" score="420"/>
      <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-btn rounded icon="sort" color="secondary" label="Urutkan" no-caps @click="sort()"/>
      </q-page-sticky>
    </div>
    
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/rapot/history.vue";
export default {
  data () {
    return {
      urutkan: false,
      model: null,
      options: [
        'Kategori', 'Score Tertinggi', 'Score Terendah', 'Waktu Tercepat'
      ]
    }
  },
  components: {
    grid
  },
  methods: {
    sort() {
      this.urutkan = true
    },
    sort2() {
      this.urutkan = false
    }
  }
};
</script>