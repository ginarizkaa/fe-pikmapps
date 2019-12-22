<template>
  <div class="q-ma-md">
    <div class="q-pt-xl">
      <p class="font1 line40 blue ctr" style="font-size: 50px;">
        salin kode
        <br />ke sini!
      </p>
    </div>
    <div class="flex flex-center q-pt-lg q-pb-md">
      <div class="row">
        <div class="col q-px-sm">
          <q-input style="width:40px;" filled v-model="kode1" bg-color="grey-5" :dense="dense" maxlength="1" />
        </div>
        <div class="col q-px-sm">
          <q-input style="width:40px;" filled v-model="kode2" bg-color="grey-5" :dense="dense" maxlength="1" />
        </div>
        <div class="col q-px-sm">
          <q-input style="width:40px;" filled v-model="kode3" bg-color="grey-5" :dense="dense" maxlength="1" />
        </div>
        <div class="col q-px-sm">
          <q-input style="width:40px;" filled v-model="kode4" bg-color="grey-5" :dense="dense" maxlength="1" />
        </div>
      </div>
    </div>
    <div class="flex flex-center q-pt-lg">
      <div class="row">
        <div class="col q-px-sm">
          <img src="statics/img/g11.png" class="q-pt-lg" />
        </div>
        <div class="col q-px-sm">
          <center>
            <q-btn
              unelevated
              rounded
              color="yellow"
              class="fbg font2"
              text-color="black"
              label="submit"
              no-caps
              to="/signup"
            />
            <q-btn
              unelevated
              rounded
              color="yellow"
              class="fbg font2 q-mt-sm"
              text-color="black"
              label="kirim ulang kode"
              no-caps
            />
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
//modifikasi
.q-field__control{
  height:25px;
  font-family: 'NeutraTextBook';
}
.q-field__native, .q-field__prefix, .q-field__suffix {
  color: rgb(71, 96, 172);
}
</style>
<script>
export default {
  data() {
    return {
      dense:'',
      kode1: "",
      kode2: "",
      kode3: "",
      kode4: ""
    };
  }
};
</script>