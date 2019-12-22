<template>
  <div>
    <q-card class="q-ma-lg card5">
      <div class="row">
        <div class="col">
          <div class="q-mt-md q-ml-md font8 fs20">Penilaian</div>
          <grid title="TPS" benar="30" salah="40" waktu="01:20" page="/" />
          <div style="height:2px; background-color:grey;margin-bottom:5px" class="q-ml-md" />
        </div>
        <div class="col">
          <img src="statics/img/g2.png" class="imganaksma2" />
        </div>
      </div>
    </q-card>
    <q-card class="q-ma-lg" style="color:dimgrey">
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-for="(data, index) in datas" :key="index">
          <template v-slot:header>
            <q-item-section>
              <label class="font7 fs20">{{data.matkul}}</label>
              <div class="marto">
                <label class="font7 fs15">Benar   </label>
                <label class="font7 fs15 red12">{{data.benar}}</label>
                <label class="font7 fs15"> Salah   </label>
                <label class="font7 fs15 red12">{{data.salah}}</label>
              </div>
            </q-item-section>
          </template>
          <q-card class="q-ml-lg q-mr-md card6" v-for="(data, index2) in data.pembahasan" :key="index2" @click="navigate2(data)">
            <div >
              <div class="row">
                <div class="col-10">
                  <label class="font8 fs15">{{index2+1}}. {{data.judul}}</label>
                </div>
                <div class="col-2" style="text-align:right">
                  <q-icon name="panorama_fish_eye" color="red" size="20px" v-if="data.jawaban"/>
                  <q-icon name="clear" color="red" size="20px" v-if="!data.jawaban"/>
                </div>
              </div>
              <div style="height:2px; background-color:grey;margin-top:5px"/>
            </div>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card>
  </div>
</template>
<style>
.card5 {
  height: 125px;
  background-color: #faf7f7;
}
.card6 {
  height: 40px;
}
.imganaksma2 {
  height: 125px;
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
<script>
import grid from "components/rapot/bahas.vue";
export default {
  data() {
    return {
      text: "",
      homediv: true,
      searchdiv1: false,
      searchdiv2: false,
      rekomendasi: false,
      sortrekomendasi: false,
      
      datas : [
        {
          matkul : "Matematika",
          benar : "5",
          salah : "6",
          pembahasan : [
            {
              judul : "Persamaan Kuadrat",
              jawaban : true,
              page : "/pembahasan/UN"
            },
            {
              judul : "Lingkaran",
              jawaban : false,
              page : "/"
            },
          ]
        },
        {
          matkul : "Fisika",
          benar : "3",
          salah : "1",
          pembahasan : [
            {
              judul : "Persamaan Kuadrat",
              jawaban : true,
              page : "/"
            },
            {
              judul : "Lingkaran",
              jawaban : false,
              page : "/"
            },
            {
              judul : "Persamaan",
              jawaban : false,
              page : "/"
            },
          ]
        },
        {
          matkul : "Kimia",
          benar : "2",
          salah : "3",
          pembahasan : [
            {
              judul : "Persamaan Kuadrat",
              jawaban : true,
              page : "/"
            },
            {
              judul : "Lingkaran",
              jawaban : false,
              page : "/"
            },
            {
              judul : "Persamaan",
              jawaban : false,
              page : "/"
            },
          ]
        }
      ]
    };
  },
  components: {
    grid
  },
  methods: {
    navigate2(data) {
      let page2 = data.page;
      console.log("ini page2", page2)
      let self = this;
      self.$router.push(page2);
    },
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
  }
};
</script>