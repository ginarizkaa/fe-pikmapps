<template>
  <div class="q-ma-md">
    <q-card class="card q-mt-md q-mb-md">
      <div class="row">
        <div class="col">
          <q-item>
            <q-item-section class="txt-left font2">
              <q-input
                borderless
                style="height:50px; margin-top:-10px"
                v-model="text"
                label="Cari Universitas/Jurusan"
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
    <div style="text-align:right">
      <q-btn
        rounded
        class="font4"
        color="secondary"
        label="submit"
        style="width:40%;text-align:right"
        @click="sort2()"
      />
    </div>
    <lineChart :title="title" :datasets="datasets" :labels="labels" />
  </div>
</template>
<style>
.card {
  height: 50px;
  background-color: #50e3c2;
}
</style>
<script>
import lineChart from "components/grafik/lineChart.vue";

export default {
  components: {
    lineChart
  },
  data() {
    return {
      text: "",
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Nilai TO UTBK",
          data: [2, 10, 5, 9, 0, 6, 20],
          backgroundColor: "transparent",
          borderColor: "rgba(116, 1, 110, 0.8)",
          pointBackgroundColor: "rgba(15, 99, 128, 190)"
        },
        {
          label: "Akuntansi UI",
          data: [10, 2, 9, 5, 8, 14, 1],
          backgroundColor: "transparent",
          borderColor: "rgba(1, 116, 188, 0.5)",
          pointBackgroundColor: "rgba(171, 71, 188, 1)"
        }
      ],
      title: 'Nilai TO UTBK'
    };
  },
  methods: {
    searchUniv() {
      console.log("Test");
    },
    searchJurusan() {
      this.urutkan = false;
    }
  }
};
</script>