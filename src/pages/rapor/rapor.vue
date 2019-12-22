<template>
  <div>
    <div v-if="homediv">
      <q-card class="q-ma-lg card2">
        <div class="row">
          <div class="col">
            <div class="q-mt-md q-ml-md font8 fs20">Penilaian</div>
            <grid
              title="TPS"
              benar="30"
              salah="40"
              waktu="01:20"
              :page="`/bahas/${$route.params.title}`"
            />
            <div style="height:2px; background-color:grey;margin-bottom:5px" class="q-ml-md" />
            <grid
              title="TKA"
              benar="30"
              salah="40"
              waktu="01:20"
              :page="`/bahas/${$route.params.title}`"
            />
          </div>
          <div class="col">
            <img src="statics/img/g1.png" class="imganaksma" />
          </div>
        </div>
      </q-card>
      <q-card class="q-ma-lg card4">
        <div class="row">
          <div class="col">
            <div class="q-ma-md">
              <img src="statics/img/confetti.png" />
            </div>
          </div>
          <div class="col q-ma-md" style="text-align:center">
            <div style="margin-top:-5px">
              <label class="font3 fs30">SCORE</label>
            </div>
            <div style="margin-top:-20px">
              <label class="font3 fs50">593</label>
            </div>
          </div>
        </div>
      </q-card>
      <div class="q-mb-md">
        <div style="text-align:center">
          <q-btn
            rounded
            class="font7"
            color="yellow"
            text-color="red"
            label="AJUKAN PROGRAM STUDI PIL 1"
            @click="search1()"
          />
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn
            rounded
            class="font7"
            color="yellow"
            text-color="red"
            label="AJUKAN PROGRAM STUDI PIL 2"
            @click="search2()"
          />
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn rounded color="secondary" no-caps style="width:60%;">
            <label class="font7 fs18">
              Teknik Komputer
              <br />
              <label class="font8 fs14">Universitas Komputer Indonesia</label>
            </label>
          </q-btn>
          <div>
            <label class="font7 fs15 red12">Tidak Lulus Kurang 291</label>
          </div>
          <div>
            <label class="font7 fs15 red12">Lulus</label>
          </div>
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn rounded color="secondary" no-caps style="width:60%;">
            <label class="font7 fs18">
              Teknik Komputer
              <br />
              <label class="font8 fs14">Universitas Komputer Indonesia</label>
            </label>
          </q-btn>
          <div>
            <label class="font7 fs15 red12">Tidak Lulus Kurang 91</label>
          </div>
          <div>
            <label class="font7 fs15 red12">Lulus</label>
          </div>
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn
            rounded
            class="font7"
            color="white"
            text-color="black"
            no-caps
            label="Submit"
            @click="search2()"
          />
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn
            rounded
            class="font7"
            color="orange"
            no-caps
            style="width:60%;"
            label="Rek. Univ & Jurusan Lulus"
            @click="recommenLulus()"
          />
        </div>
        <div style="text-align:center" class="q-mt-sm">
          <q-btn
            rounded
            class="font7"
            color="red"
            no-caps
            style="width:60%;"
            label="Ambil Test Lagi!"
            to="/tryOut"
          />
        </div>
      </div>
    </div>
    <div v-if="searchdiv1">
      <div class="q-ma-md">
        <q-card class="card-searchUniv q-mt-md q-mb-md">
          <div class="row">
            <div class="col">
              <q-item>
                <q-item-section class="txt-left font2">
                  <q-input
                    borderless
                    style="height:50px; margin-top:-10px"
                    v-model="searchUniv"
                    label="Cari Jurusan"
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

        <q-card
          class="q-mt-sm"
          v-for="(data, index) in hasilSearchUniv"
          :key="index"
          @click="pilihUniv()"
        >
          <div class="q-ml-sm">
            <div>
              <label class="font7 fs20">{{data.jurusan}}</label>
            </div>
            <div style="margin-top:-5px">
              <label class="font8 fs18">{{data.universitas}}</label>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div v-if="searchdiv2">
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

        <q-card v-for="(data, index) in hasilSearch" :key="index" @click="pilihUniv()">
          <div class="q-ml-sm">
            <div>
              <label class="font7 fs20">{{data.jurusan}}</label>
            </div>
            <div style="margin-top:-5px">
              <label class="font8 fs18">{{data.universitas}}</label>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div v-if="rekomendasi">
      <div class="q-ma-md">
        <div style="text-align:right;" class="q-mb-md">
          <q-btn
            rounded
            icon="sort"
            color="secondary"
            label="Urutkan"
            no-caps
            @click="recommenSort()"
          />
        </div>

        <q-card v-for="(data, index) in hasilSearch" :key="index" @click="pilihUniv()">
          <div class="q-ml-sm">
            <div>
              <label class="font7 fs20">{{data.jurusan}}</label>
            </div>
            <div style="margin-top:-5px">
              <label class="font8 fs18">{{data.universitas}}</label>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div v-if="sortrekomendasi">
      <div class="q-ma-md">
        <q-select v-model="model" :options="options" label="Urutkan" @input="onClickChange()" />
      </div>
    </div>
  </div>
</template>
<style>
.card2 {
  height: 200px;
  background-color: #faf7f7;
}
.card4 {
  height: 115px;
  background-color: dimgrey;
  color: white;
}
.imganaksma {
  height: 180px;
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.card-searchUniv {
  height: 50px;
  background-color: #50e3c2;
}
</style>
<script>
import grid from "components/rapot/rapor.vue";
export default {
  data() {
    return {
      searchUniv: "",
      text: "",
      homediv: true,
      searchdiv1: false,
      searchdiv2: false,
      rekomendasi: false,
      sortrekomendasi: false,
      hasilSearch: [
        {
          universitas: "Universitas Komputer Indonesia",
          jurusan: "Teknik Komputer"
        },
        {
          universitas: "Universitas Komputer Indonesia",
          jurusan: "Teknik Komputer"
        },
        {
          universitas: "Universitas Komputer Indonesia",
          jurusan: "Teknik Informatika"
        }
      ],
      dataUniv: [
        {
          universitas: "Universitas Komputer Indonesia",
          jurusan: "Teknik Komputer"
        },
        {
          universitas: "Universitas Indonesia",
          jurusan: "Psikologi"
        },
        {
          universitas: "Universitas Islam Negeri",
          jurusan: "Tarbiyah"
        }
      ],
      model: null,
      options: [
        "Sesuai Univ Pil 1",
        "Sesuai Univ Pil 2",
        "Sesuai Jurusan Pil 1",
        "Sesuai Jurusan Pil 2",
        "Tampilkan Semua"
      ]
    };
  },
  components: {
    grid
  },
  methods: {
    search1() {
      this.homediv = false;
      this.searchdiv1 = true;
    },
    search2() {
      this.homediv = false;
      this.searchdiv1 = true;
    },
    pilihUniv() {
      this.homediv = true;
      this.searchdiv1 = false;
      this.searchdiv2 = false;
      this.rekomendasi = false;
    },
    recommenLulus() {
      this.homediv = false;
      this.rekomendasi = true;
    },
    recommenSort() {
      this.sortrekomendasi = true;
      this.rekomendasi = false;
    },
    onClickChange() {
      this.sortrekomendasi = false;
      this.rekomendasi = true;
    }
  },
  computed: {
    hasilSearchUniv: function() {
      return this.dataUniv.filter(idx => {
        return (
          idx.jurusan.toLowerCase().match(this.searchUniv.toLowerCase()) ||
          idx.universitas.toLowerCase().match(this.searchUniv.toLowerCase())
        );
      });
    }
  }
};
</script>