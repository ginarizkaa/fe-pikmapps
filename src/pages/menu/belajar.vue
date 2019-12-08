<template>
  <div class="q-pa-sm">
    <div>
      <q-carousel
        style="margin-top:-30px;"
        swipeable
        control-color="blue"
        navigation
        padding
        height="200px"
        class="transparent"
        animated
        v-model="slide"
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="statics/img/menu1.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="statics/img/sign3.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="statics/img/sign4.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="statics/img/sign5.png" class="q-pt-lg" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="flex flex-center">
      <img src="statics/img/kalendar.png" width="330px" />
    </div>
    <div class="row flex flex-center q-pt-lg">
      <div class="q-ma-xs">
        <grid title="Modul" height="70" width="80" imgurl="statics/img/g12.png" page="/modul/Modul" />
      </div>
      <div class="q-ma-xs">
        <grid title="Post Test" height="70" width="80" imgurl="statics/img/g13.png" page="/pt/Post Test" />
      </div>
      <div class="q-ma-xs">
        <grid title="Try Out" height="70" width="80" imgurl="statics/img/g16.png" page="/tryOut" />
      </div>
      <div class="q-ma-xs">
        <grid title="Bank Soal" height="70" width="80" imgurl="statics/img/g15.png" page="/bankSoal/Bank Soal" />
      </div>
      <div class="q-ma-xs">
        <grid title="Konsul" height="70" width="80" imgurl="statics/img/g14.png" page="/" />
      </div>
      <div class="q-ma-xs">
        <grid title="Rapor" height="70" width="60" imgurl="statics/img/g17.png" page="/" />
      </div>
    </div>
  </div>
</template>
<script>
import grid from "components/menu/button.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      slide: "style"
    };
  },
  methods: {
    navigate(page) {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>