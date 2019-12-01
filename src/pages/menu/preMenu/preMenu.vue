<template>
  <div style="background-color:#F8F8F8;background-image: url('statics/img/group193.png'); height:640px; margin-top:-50px;">
    <h3 class="font1 blue ctr" style="padding-top:50px;">
      aku ingin
      <br />
      jadi...
    </h3>
    <center>
      <div >
        <q-select
          class="fbg"
          rounded
          outlined
          bg-color="grey-2"
          v-model="model"
          :options="options"
        />
      </div>
    </center>
    <div class="ctr" style="margin-top:20px">
    <img src="statics/img/g4.png" style="height: 300px" />
    
    <img src="statics/img/g3.png" style="height: 300px" />
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      model: "Pilih...",
      options: ["Sosiolog", "Dokter", "Psikolog", "Programmer", "Arsitek", "Guru", "Pengacara"]
    };
  }
};
</script>
