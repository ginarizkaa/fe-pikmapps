<template>
  <div>
    <div>
      <div class="bg-grit">
        <div class="q-mx-md q-pt-sm">
          <div class="row">
            <div class="col-9 q-pr-xs">
              <div class="font3 fs50 yellow">GRIT !</div>
              <div class="font2 yellow q-pt-sm">Siapkan tekad dan lakukan perjalanan mencari jati diri disini!</div>
            </div>
            <div class="col-3 q-pr-lg q-pt-md">
              <img style="height:120px;" src="statics/img/g4.png" />
            </div>
          </div>
          <div class="font2 yellow">
            Nikmati perjalanannya dengan sungguh serta bangun keyakinan dan motivasi tertangguh diri kamu.
            Orang yang sukses bukan orang-orang yang berbakat, melainkan mereka yang berusaha terus dan yakin akan usahanya!
          </div>
          <div class="font2 fs1 yellow q-pt-md">#KAMUBISA!</div>
        </div>
      </div>
    </div>
    <center>
      <div>
        <div class="q-ma-md">
            <div class="row">
                <div class="col-4 q-pb-md">
                     <grid1 label1="Kenal" label2="Diri" page="/grit/kd/Kenal Diri" />
                </div>
                <div class="col-4 q-pb-md">
                    <grid1 label1="Kenal" label2="Minat" page="/grit/km/Kenal Minat" />
                </div>
                <div class="col-4 q-pb-md">
                    <!-- jika hanya terdiri dari 1 kata, label2 diisi null saja -->
                    <grid1 label1="Mimpi" label2="null" page="/grit/m/Mimpi"/>
                </div>
                <!-- jika di lock pakai grid2 -->
                <div class="col-4 q-pb-md">
                    <grid2 label1="Saya" label2="null" page="/grit/saya/Saya"/>
                </div>
                <div class="col-4 q-pb-md">
                    <grid2 label1="Surat" label2="null" page="/grit/surat/Surat"/>
                </div>
                <div class="col-4 q-pb-md">
                    <grid2 label1="Komit" label2="-men" page="/grit/kom/Komitmen"/>
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
.my-card {
  margin-bottom: 15px;
  height: 90px;
}
</style>
<script>
import grid1 from "components/grit/cgrit.vue";
import grid2 from "components/grit/cgritLock.vue";

export default {
  components: {
    grid1,
    grid2
  }
};
</script>