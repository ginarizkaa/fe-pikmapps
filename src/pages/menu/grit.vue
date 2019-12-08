<template>
  <div>
    <div class="ctr q-pt-md">
      <img src="statics/img/temanPikma1.png" />
    </div>
    <div class="flex flex-center">
      <q-card class="my-cardgrit">
        <q-card-section class="bg-yellow font2 fs20 blue" style="height:50px">
          <div style="margin-top:-7px">#ceritaalumni</div>
        </q-card-section>
        <q-separator />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section @click="navigate()" v-model="alumni">
            <q-item-label class="font2">Perjuangan Anak Petani untuk Masuk Universitas Indonesia!</q-item-label>
            <!-- <q-item-label caption>Subhead</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <center>
      <div>
        <div class="q-ma-md">
          <div class="row">
            <div class="col-4 q-pb-md">
              <grid1 label1="Kenal" label2="Diri" page="/grit/kd/Kenal Diri" />
            </div>
            <div class="col-4 q-pb-md">
              <grid1 label1="Galau" label2="null" page="/grit/galau/Galau" />
            </div>
            <div class="col-4 q-pb-md">
              <grid1 label1="Tips" label2="Trik" page="/grit/tipsTrik/Tips dan Trik" />
            </div>
            <div class="col-4 q-pb-md">
              <grid1 label1="Susun" label2="Jadwal" page="/grit/sj/Susun Jadwal" />
            </div>
            <div class="col-4 q-pb-md">
              <grid1 label1="Kontak" label2="Alumni" page="/grit/ka/Kontak Alumni" />
            </div>
            <!-- <div class="col-4 q-pb-md">
              <grid1 label1="Kenal" label2="Minat" page="/grit/km/Kenal Minat" />
            </div> -->
            <div class="col-4 q-pb-md">
              <!-- jika hanya terdiri dari 1 kata, label2 diisi null saja -->
              <grid1 label1="Mimpi" label2="null" page="/grit/m/Mimpi" />
            </div>
            <!-- jika di lock pakai grid2 -->
            <div class="col-4 q-pb-md">
              <grid2 label1="Saya" label2="null" page="/grit/saya/Saya" />
            </div>
            <div class="col-4 q-pb-md">
              <grid2 label1="Surat" label2="null" page="/grit/surat/Surat" />
            </div>
            <div class="col-4 q-pb-md">
              <grid2 label1="Komit" label2="-men" page="/grit/kom/Komitmen" />
            </div>
            <div class="col-4 q-pb-md">
              <grid1 label1="Artikel" label2="null" page="/grit/ar/Artikel" />
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>
<style lang="stylus">
.my-cardgrit {
  width: 100%;
  max-width: 330px;
  height: 115px;
}
</style>
<script>
import grid1 from "components/grit/cgrit.vue";
import grid2 from "components/grit/cgritLock.vue";

export default {
  components: {
    grid1,
    grid2
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      alumni: 'grit/ca/Cerita Alumni'
    };
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.alumni });
    }
  }
};
</script>