<template>
  <div>
    <div class="q-pt-md q-pb-xs q-px-md bg-white">
      <p class="font3 fs20">NOTIFIKASI PESAN</p>
    </div>
    <div class="q-px-md">
      <q-card class="card q-mt-md q-mb-md">
        <div class="row">
          <div class="col">
            <q-item>
              <q-item-section class="txt-left font2">
                <q-input
                  borderless
                  style="height:50px; margin-top:-10px"
                  v-model="search"
                  label="Cari..."
                />
              </q-item-section>
            </q-item>
          </div>
          <div class="col-2" style="text-align:right">
            <img src="statics/img/g2.png" height="50px" width="45px" />
          </div>
          <div class="col-2" style="text-align:center">
            <q-icon name="search" style="font-size: 45px; margin-top:5px" @click="searchUniv()" />
          </div>
        </div>
      </q-card>

      <grid
        v-for="(idx, index) in filteredTanya"
        class="q-mb-sm"
        :title="`${idx.judul}`"
        :caption="`${idx.penulis}`"
        page="/grit/ca2/Cerita Alumni 2"
        :key="index"
        :status="`${idx.status}`"
      />
    </div>
  </div>
</template>
<style lang="stylus">
.my-card {
  width: 100%;
}

.card {
  height: 50px;
  background-color: #50e3c2;
}</style>
<script>
import grid from "components/notifikasi/cNotifikasi.vue";
export default {
    components: {
    grid
  },
  data() {
    return {
      search: "",
      dataAlumni: [
        {
          judul: "Ikuti Try Out Kakak-Kakak UI yuk!",
          penulis: "8 November 2019",
          status: "read"
        },
        {
          judul: "Promo Program Belajar Offline!",
          penulis: "4 November 2019",
          status: "unread"
        },
        {
          judul: "Ajak Temanmu Install, dan dapatkan...",
          penulis: "1 NOvember 2019",
          status: "unread"
        }
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataAlumni.filter(idx => {
        return idx.judul.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>