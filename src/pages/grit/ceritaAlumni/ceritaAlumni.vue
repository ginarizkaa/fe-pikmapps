<template>
  <div class="q-pa-md">
    <q-card class="card q-mt-md q-mb-md">
      <div class="row">
        <div class="col">
          <q-item>
            <q-item-section class="txt-left font2">
              <q-input
                borderless
                style="height:50px; margin-top:-10px"
                v-model="search"
                label="Cari Topik..."
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

    <div class="q-pt-md">
      <grid
        v-for="(idx, index) in filteredTanya"
        class="q-mb-sm"
        :title="`${idx.judul}`"
        :caption="`${idx.penulis}`"
        page="/grit/ca2/Cerita Alumni 2"
        :imgurl="`${idx.foto}`"
        :key="index"
      />
    </div>
  </div>
</template>
<style lang="stylus">
.q-field__control {
  font-family: 'NeutraTextBook';
}

.q-field__native, .q-field__prefix, .q-field__suffix {
  color: black;
}

.card {
  height: 50px;
  background-color: #50e3c2;
}
</style>

<script>
import grid from "components/Alumni/cCeritaAlumni.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      tab: "tipsTrik",
      search: "",
      dataAlumni: [
        {
          judul: "Perjuangan Anak Petani untuk Masuk Universitas Indonesia",
          penulis: "Amar Khoerul Umam",
          foto: "statics/img/profile.png"
        },
        {
          judul: "Gap Year untuk Masuk Kedokteran",
          penulis: "Gugun Hitomi",
          foto: "statics/img/profile.png"
        },
        {
          judul: "SBMPTN berkali-kali untuk Masuk PTN",
          penulis: "Indah Andariya",
          foto: "statics/img/profile.png"
        },
        {
          judul: "Pulang Malam Demi Belajar di PIKMA",
          penulis: "Sandra Radinka",
          foto: "statics/img/profile.png"
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