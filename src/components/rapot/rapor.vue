<template>
  <div class="q-ml-md card3">
    <div class="row">
      <div class="col">
        <label class="font7 fs20">{{title}}</label>
        <div class="marto">
          <label class="font7 fs15">Benar   </label>
          <label class="font7 fs15 red12">{{benar}}</label>
        </div>
        <div class="marto">
          <label class="font7 fs15 marto">Salah </label>
          <label class="font7 fs15 red12">{{salah}}</label>
        </div>
      </div>
      <div class="col" style="text-align:right">
        <q-btn
          rounded
          class="font8"
          no-caps
          color="yellow"
          text-color="dimgrey"
          label="Bahas"
          style="height:10px"
          @click="navigate()"
        />
        <div class="q-ma-xs">
          <div class="row">
            <div class="col" style="text-align:center">
              <img src="statics/img/clock.png" style="height:21px;width:21px" />
            </div>
            <div class="col" style="text-align:center">
              <label class="font8 fs15" style>{{waktu}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card2 {
  height: 200px;
  background-color: #faf7f7;
}
.card3 {
  height: 70px;
  background-color: transparent;
  color: dimgrey;
}
.marto {
  margin-top: -5px;
}
</style>
<script>
export default {
  props: {
    page: "",
    title: "",
    waktu: "",
    benar:"",
    salah: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>