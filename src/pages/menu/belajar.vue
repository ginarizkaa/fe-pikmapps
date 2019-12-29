<template>
  <div class="q-pa-sm">
    <div>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="blue"
        navigation
        padding
        autoplay
        infinite
        height="180px"
        class="transparent rounded-borders q-mx-xs"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="text-center">
            <img src="statics/img/menu1.png" height="140px"/>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="text-center">
            <img src="statics/img/sign5.png" height="140px"/>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="text-center">
            <img src="statics/img/sign3.png" height="140px"/>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="text-center">
            <img src="statics/img/sign4.png" height="140px"/>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="flex flex-center"  style="margin-top:-15px">
      <!-- <img src="statics/img/kalendar.png" width="330px" /> -->
      <q-card style="height:123px;width:100%">
        <div style="height:30px; background-color:yellow">
          <!-- <div>
            <label class="fs15 font4 q-ma-sm">{{today}}</label>
          </div>
          <div style="margin-top:-8px"> -->
          <div>
            <label class="fs20 font4 q-ma-sm" >{{today}}, {{tgl}}</label>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            
            <div style="margin-top:5px">
            <label class="fs15 font4 q-ma-sm">{{todaytgl}}</label>
            </div>
            <div style="margin-top:-5px">
            <label class="fs15 font4 q-ma-sm">{{today}}</label>
            </div>            
          </div>
          <div class="col">
            <div class="q-ma-md" style="background-color:yellow">
              <label class="font4">Pendaftaran TO</label>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:-20px">
          <div class="col-3">
            <div style="margin-top:5px">
            <label class="fs15 font4 q-ma-sm">{{tomorrowtgl}}</label>
            </div>
            <div style="margin-top:-5px">
            <label class="fs15 font4 q-ma-sm">{{tomorrow}}</label>
            </div>   
          </div>
          <div class="col">
            <div class="q-ma-md" style="background-color:yellow">
              <label class="font4">Pembukaan UTBK</label>
            </div>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row flex flex-center q-pt-lg" style="margin-top:-20px">
      <div class="q-ma-xs">
        <grid2 title="Modul" height="70" width="80" imgurl="statics/img/g12.png" page="/modul/Modul" />
      </div>
      <div class="q-ma-xs">
        <grid2 title="Post Test" height="70" width="80" imgurl="statics/img/g13.png" page="/pt/Post Test" />
      </div>
      <div class="q-ma-xs">
        <grid title="Try Out" height="70" width="80" imgurl="statics/img/g16.png" page="/tryOut" />
      </div>
    </div>
    <div class="row flex flex-center q-pt-lg" style="margin-top:-20px">
      <div class="q-ma-xs">
        <grid title="Bank Soal" height="70" width="80" imgurl="statics/img/g15.png" page="/bankSoal/Bank Soal" />
      </div>
      <div class="q-ma-xs" v-if="trial=false">
        <grid title="Konsul" height="70" width="80" imgurl="statics/img/g14.png" page="/" />
      </div>
      <div class="q-ma-xs" v-if="trial=true">
        <grid2 title="Konsul" height="70" width="80" imgurl="statics/img/g14.png" page="/" />
      </div>
      <div class="q-ma-xs">
        <grid title="Rapor" height="70" width="60" imgurl="statics/img/g17.png" page="/history/Rapor" />
      </div>
    </div>
  </div>
</template>
<script>
import grid from "components/menu/button.vue";
import grid2 from "components/menu/buttonLock.vue";
import { date } from 'quasar'
export default {
  components: {
    grid,
    grid2
  },
  data() {
    return {
      slide: "style",
      trial: true,
      formattedString : '',
      formattedString2 : undefined
    };
  },
  methods: {
    navigate(page) {
      let self = this;
      self.$router.push({ path: self.page });
    }
  },
  created() {
    let timeStamp = Date.now()
    this.today = date.formatDate(timeStamp, 'dddd', {
      days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    })
    this.todaytgl = date.formatDate(timeStamp, 'DD')

    this.tgl = date.formatDate(timeStamp, 'DD MMMM YYYY', {
      months : ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    })

    let timeStamp2 = date.addToDate(timeStamp, { days: 1 })
    this.tomorrowtgl = date.formatDate(timeStamp2, 'DD')
    this.tomorrow = date.formatDate(timeStamp2, 'dddd', {
      days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    })
  }
};
</script>