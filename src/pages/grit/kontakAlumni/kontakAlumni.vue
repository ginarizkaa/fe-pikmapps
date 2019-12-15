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
                label="Cari Kakak..."
              />
            </q-item-section>
          </q-item>
        </div>
        <div class="col-2" style="text-align:right">
          <img src="statics/img/g2.png" height="50px" width="45px" />
        </div>
        <div class="col-2" style="text-align:center">
          <q-icon name="search" style="font-size: 45px; margin-top:5px"/>
        </div>
      </div>
    </q-card>

    <grid
      v-for="(idx, index) in filteredTanya"
      :nama="`${idx.nama}`"
      :univ="`${idx.univ}`"
      :tahun="`${idx.tahun}`"
      :profesi="`${idx.profesi}`"
      caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid"
      page="/signup"
      :key="index"
    />
  </div>
</template>
<style lang="stylus">
.card {
  height: 50px;
  background-color: #50e3c2;
}
</style>

<script>
import grid from "components/Alumni/cKontakAlumni.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      search: "",
      dataKontak: [
        {
          nama: "Gina",
          univ: "UPNVJT",
          tahun: "2015",
          profesi: "IT Developer"
        },
        {
          nama: "Dindin",
          univ: "UNIKOM",
          tahun: "2014",
          profesi: "IT Developer"
        },
        {
          nama: "Dhira",
          univ: "UI",
          tahun: "2014",
          profesi: "Dokter Gigi"
        },
        {
          nama: "Dwi Gita",
          univ: "UNAIR",
          tahun: "2013",
          profesi: "Dokter Kulit"
        },
        {
          nama: "Irwienda",
          univ: "UNDIP",
          tahun: "2012",
          profesi: "Konsultan Hukum"
        }
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataKontak.filter(idx => {
        return idx.nama.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>