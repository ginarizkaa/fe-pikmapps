<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="yellow"
        navigation
        padding
        height="500px"
        class="transparent"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="statics/img/logo.png" width="125px" />
          <img src="statics/img/sign1.png" class="q-pt-lg" />
          <img src="statics/img/sign2.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="statics/img/logo.png" width="125px" />
          <img src="statics/img/sign3.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="statics/img/logo.png" width="125px" />
          <img src="statics/img/sign4.png" class="q-pt-lg" />
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="statics/img/logo.png" width="125px" />
          <img src="statics/img/sign5.png" class="q-pt-lg" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div style="margin-top: 5px">
      <center>
        <q-btn
          unelevated
          rounded
          color="grey-5"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/fb_logo.png"
          label="Masuk Dengan Facebook"
          no-caps
        />
        <q-btn
          unelevated
          rounded
          color="grey-5 q-mt-sm"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/google_logo.png"
          label="Masuk Dengan Google"
          no-caps
        />
      </center>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      slide: "style",
      
      };
  }
};
</script>