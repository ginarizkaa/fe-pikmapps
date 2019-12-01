<template>
  <div>
    <div class="bg-greyy">
      <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" style="margin:20px;" />
      <div class="font3 yellow fs4" style="margin-left:30px;margin-top:-30px">
        TO UTBK
        <img style="height:50px;" src="statics/img/g10.png" />
      </div>
      <div
        class="yellow font2"
        style="margin-left:30px;margin-top:-15px"
      >Uji sejauh mana kemampuan untuk raih mimpimu!</div>
    </div>
    <div class="q-ma-md">
      <grid  title="SKOLASTIK" caption="TO UTBK Paket 1" done="10/15"/>
      <grid  title="MATEMATIKA" caption="TO UTBK Paket 1" done="7/15"/>
      <grid  title="B. INGGIS" caption="TO UTBK Paket 1" done="15/15"/>
      <grid  title="B. INDONESIA" caption="TO UTBK Paket 1" done=""/>
      <center>
        <q-btn unelevated rounded color="grey" label="Submit" style="width: 30%" @click="dialog = true"/>
      </center>
    </div>
    <div>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="transparent">

        <div class="absolute-center" style="width: 100%; text-align:center">
          <img src="statics/icon/upload.png" height="100px" width="100px" />
          <p class="blue-tos font2 fs25">Berhasil di Upload</p>
          <q-btn unelevated rounded color="secondary" label="Lihat Hasil" no-caps style="width: 30%" to="/hasil"/>
        </div>
      </q-card>
    </q-dialog>
  </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/tryOut/pelajaran/ctoPelajaran2.vue";
export default {
  components: {
    grid
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true
    }
  }
};
</script>