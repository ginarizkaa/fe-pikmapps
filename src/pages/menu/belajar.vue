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
          <img src="statics/img/menu1.png" class="q-pt-lg"/>
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
      <div class="col-4 ctr" style="height:100px" @click="navigate('/signin')" >
        <img class="q-pt-xs" src="statics/img/g12.png" width="60px" />
        <p style="margin-top:2px" class="q-pb-xs">Modul</p>
      </div>
      <div class="col-4 ctr" style="height:100px">
        <img class="q-pt-xs" src="statics/img/g13.png" width="80px" />
        <p style="margin-top:3px" class="q-pb-xs">Post Test</p>
      </div>
      <div class="col-4 ctr" style="height:100px">
        <img class="q-pt-xs" src="statics/img/g16.png" width="80px" />
        <p style="margin-top:15px" class="q-pb-xs">Try Out</p>
      </div>
      <div class="col-4 ctr q-mt-md" style="height:100px">
        <img src="statics/img/g15.png" width="80px" />
        <p style="margin-top:35px">Bank Soal</p>
      </div>
      <div class="col-4 ctr q-mt-md" style="height:100px">
        <img src="statics/img/g14.png" width="80px" />
        <p style="margin-top:15px">Konsul</p>
      </div>
      <div class="col-4 ctr q-mt-md" style="height:100px">
        <img src="statics/img/g17.png" width="60px" />
        <p style="margin-top:-2px">Rapor</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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