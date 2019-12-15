<template>
  <div>
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
      
      <q-card>
        <div class="q-ml-sm">
          <div>
            <label class="font7 fs20">Pendidikan Dokter</label>
          </div>
          <div style="margin-top:-5px">
            <label class="font8 fs18">Universitas Komputer Indonesia</label>
          </div>
        </div>
      </q-card>
      <q-card>
        <div class="q-ml-sm">
          <div>
            <label class="font7 fs20">Pendidikan Dokter</label>
          </div>
          <div style="margin-top:-5px">
            <label class="font8 fs18">Universitas Komputer Indonesia</label>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<style>
.card {
  height: 50px;
  background-color: #50e3c2;
}
</style>
<script>
export default {
  data() {
    return {
      text: ""
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