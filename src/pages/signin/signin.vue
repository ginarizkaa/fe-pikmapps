<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
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
    <center>
      <div style="margin-top: 5px; width:280px">
        <q-btn
          unelevated
          rounded
          color="grey-4"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/email_logo.png"
          label="Mulai Dengan Email"
          no-caps
          to="/masukkanKode"
        />
        <q-btn
          unelevated
          rounded
          color="grey-4 q-mt-sm"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/hp_logo.png"
          label="Mulai Dengan No. HP"
          no-caps
          to="/masukkanKode"
        />
      </div>
    </center>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: "style"
    };
  }
};
</script>