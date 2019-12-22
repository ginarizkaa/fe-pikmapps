<template>
  <div>
    <div class="flex flex-center">
      <q-card class="my-cardkenaldiri q-mt-lg q-mx-md">
        <q-card-section class="bg-grey-12 font2 fs20 blue" style="height:50px">
          <div style="margin-top:-7px" class="ctr">KAMU ITU SPESIAL!</div>
        </q-card-section>
        <q-separator />

        <q-item>
            <pdf src="/statics/pdf/pdf-test.pdf" width="100%"></pdf>
          <!-- <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section @click="navigate()" v-model="alumni">
            <q-item-label class="font2">Perjuangan Anak Petani untuk Masuk Universitas Indonesia!</q-item-label>
          </q-item-section> -->
        </q-item>
      </q-card>
    </div>
    <div class="fixed-bottom-right">
        <img src="statics/img/kenalDiri1.png" width="330px" style="margin-bottom:55px;">
    </div>
  </div>
</template>
<style lang="stylus">
.my-cardkenaldiri {
  width: 100%;
  height: auto;
}
</style>
<script>
import pdf from 'vue-pdf'
import grid1 from "components/grit/cgrit.vue";
import grid2 from "components/grit/cgritLock.vue";

export default {
  components: {
    grid1,
    grid2,
    pdf
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