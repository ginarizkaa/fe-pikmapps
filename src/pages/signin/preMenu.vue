<template>
  <div class="q-pa-md">
    <h3 class="font1 blue ctr">
      aku ingin
      <br />jadi...
    </h3>
    <center>
      <div>
        <q-select
          class="fbg"
          rounded
          outlined
          bg-color="grey-2"
          v-model="model"
          :options="options"
        />
      </div>
      <q-btn
        unelevated
        rounded
        color="yellow"
        class="font2 q-mt-sm"
        text-color="black"
        label="submit"
        no-caps
        to="/preMenu2"
      />
    </center>
    <div class="ctr" style="margin-top:20px">
      <img src="statics/img/g4.png" style="height: 300px" class="q-px-sm" />
      <img src="statics/img/g3.png" style="height: 300px" class="q-px-sm"  />
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      model: "Pilih...",
      options: [
        "Sosiolog",
        "Dokter",
        "Psikolog",
        "Programmer",
        "Arsitek",
        "Guru",
        "Pengacara"
      ]
    };
  }
};
</script>
