<template>
  <div class="q-pa-md">
    <div>
      <grid
        :title="`${$route.params.title}`"
        :caption="`${$route.params.caption}`"
        :price="`${$route.params.price}`"
      />
    </div>
    <div>
      <q-card class="tryOut">
        <q-card-section>
          <div class="row">
            <div class="col-7">
              <q-item>
                <q-item-section class="txt-left">
                  <q-item-label class="font4 fs18 black">Harga</q-item-label>
                  <q-item-label class="font4 fs18 black">Kode Unik</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section class="txt-left">
                  <q-item-label class="font4 fs18 black">Total</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-1">
              <q-item>
                <q-item-section class="txt-left">
                  <q-item-label class="font4 fs18 red">Rp</q-item-label>
                  <q-item-label class="font4 fs18 red">Rp</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section class="txt-left">
                  <q-item-label class="font4 fs18 red">Rp</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-4">
              <q-item>
                <q-item-section class="txt-right">
                  <q-item-label class="font4 fs18 red">{{$route.params.price}}</q-item-label>
                  <q-item-label class="font4 fs18 red">{{kodeUnik}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section class="txt-right">
                  <q-item-label class="font4 fs18 red">{{total}}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="bg-yellow">
          <q-item>
            <q-item-section class="ctr">
              <q-item-label class="font4 fs10 black">
                Transfer sejumlah total pembayaran (harga + kode unik). Kode unik sangat penting untuk menjadi identitas kamu.
                Bukti transfer harus di screeshot atau difoto sebagai bukti pembayaran. Klik tombol konfirmasi jika sudah melakukan pembayaran.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <q-card class="tryOut">
        <div class="q-pt-sm q-px-sm">
          <q-item-label class="font4 fs20 black">Metode Pembayaran</q-item-label>
        </div>
        <q-card-section>
          <div v-for="(idx, index) in data" :key="index">
            <div class="row q-pa-sm">
              <div class="col-4 flex flex-center">
                <img :src="`${idx.imgurl}`" width="80%" height="70%" />
              </div>
              <div class="col-8 q-pl-md">
                <q-item-label class="font4 fs14 black">
                  {{idx.metode}}
                  <br />
                  {{idx.noId}}
                  <br />
                  {{idx.nama}}
                </q-item-label>
              </div>
            </div>
            <q-separator />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="ctr q-pb-lg q-pt-md">
      <q-btn
        rounded
        color="teal-12"
        size="md"
        class="font4"
        text-color="black"
        label="Konfirmasi Pembayaran"
        no-caps
      />
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/temanPikma/ctemanPikmaCard.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      data: [
        {
          imgurl: "statics/icon/bni_logo.png",
          metode: "BNI",
          noId: "039 836 8550",
          nama: "a.n Muhammad Delly Permana"
        },
        {
          imgurl: "statics/icon/ovo_logo.png",
          metode: "OVO",
          noId: "0822 3820 2043",
          nama: "a.n Muhammad Delly Permana"
        },
        {
          imgurl: "statics/icon/gopay_logo.png",
          metode: "GO-PAY",
          noId: "0822 3820 2043",
          nama: "a.n Muhammad Delly Permana"
        },
        {
          imgurl: "statics/icon/alfamart_logo.png",
          metode: "Alfamart",
          noId: "0822 3820 2043",
          nama: "a.n Muhammad Delly Permana"
        },
        {
          imgurl: "statics/icon/indomaret_logo.png",
          metode: "Indomaret",
          noId: "0822 3820 2043",
          nama: "a.n Muhammad Delly Permana"
        }
      ],
      kodeUnik: "500"
    };
  },
  computed: {
    total: function() {
      var harganya = this.$route.params.price;
      var kodenya = this.kodeUnik;
      return parseInt(harganya) + parseInt(kodenya);
    }
  }
};
</script>