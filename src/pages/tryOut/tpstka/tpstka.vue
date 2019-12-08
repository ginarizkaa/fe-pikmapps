<template>
  <div class="q-ma-md">
      <grid1 page="/toUTBKSoal" title="TPS" caption="0/90"/>
      <grid2 title="TKA"/>
      <center>
        <q-btn unelevated rounded color="yellow" label="Submit" style="width: 150px" @click="dialog = true"/>
      </center>
      <div>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="transparent">

        <div class="absolute-center" style="width: 100%; text-align:center">
          <img src="statics/icon/upload.png" height="100px" width="100px" />
          <p class="blue-tos font2 fs25">Berhasil di Upload</p>
          <q-btn unelevated rounded color="secondary" label="Lihat Hasil" no-caps style="width: 30%" to="/belajar"/>
        </div>
      </q-card>
    </q-dialog>
  </div>
  </div>
  

</template>
<script>
import grid1 from "components/tryOut/tpstka/tpstka.vue";
import grid2 from "components/tryOut/tpstka/tpstka2.vue";
export default {
  components: {
    grid1,
    grid2
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true
    }
  }
};
</script>