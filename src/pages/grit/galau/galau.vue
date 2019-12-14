<template>
  <div class="q-pa-md">
    <!-- <q-card class="my-card">
      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Bingung Kuliah" name="bingungKuliah" />
        <q-tab label="Tips dan Trik Belajar" name="tipsTrik" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel
          name="bingungKuliah"
        >The QCard component is a great way to display important pieces of grouped content.</q-tab-panel>

        <q-tab-panel name="tipsTrik">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>-->
    <q-card class="card q-mt-md q-mb-md">
      <div class="row">
        <div class="col">
          <q-item>
            <q-item-section class="txt-left font2">
              <q-input
                borderless
                style="height:50px; margin-top:-10px"
                v-model="search"
                label="Tanyakan masalahmu..."
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

    <q-list bordered class="font4 rounded-borders q-mt-lg">
      <q-expansion-item
        v-for="(idx, index) in filteredTanya"
        expand-separator
        :label="`${idx.tanya}`"
        :key="index"
      >
        <q-card>
          <q-card-section>{{idx.jawab}}</q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <!-- <input id="idSearch" type="text" placeholder="Search.." />
    <div id="idTanya">
      <p>saya bisa saja</p>
      <p>ngomong yang bener</p>
      <p>kenapa saya lucu</p>
      <p>pacar saya dia</p>
      <p>kamu bingung kan</p>
    </div>-->
  </div>
</template>
<style lang="stylus">
.my-card {
  width: 100%;
}
.card {
  height: 50px;
  background-color: #50e3c2;
}
</style>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      tab: "tipsTrik",
      search: "",
      dataTanya: [
        {
          tanya: "Kira-Kira Saya Cocoknya Masuk Apa Ya?",
          jawab:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid."
        },
        {
          tanya: "Pilih Universitas atau Jurusan dulu Ya?",
          jawab: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          tanya: "Saya Terjebak di IPA, Mampukah ke IPS?",
          jawab:
            "Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam."
        },
        {
          tanya: "Saya Perempuan, Mending dalam Kota Saja?",
          jawab: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataTanya.filter(idx => {
        return idx.tanya.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>