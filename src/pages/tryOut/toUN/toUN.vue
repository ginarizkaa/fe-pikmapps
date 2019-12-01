<template>
  <div>
    <div class="bg-greyy">
      <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" style="margin:20px;" />
      <div class="font3 yellow fs4" style="margin-left:30px;margin-top:-30px">
        TO UN
        <img style="height:50px;" src="statics/img/g10.png" />
      </div>
      <div
        class="yellow font2"
        style="margin-left:30px;margin-top:-15px"
      >Uji sejauh mana kemampuan untuk raih mimpimu!</div>
    </div>
    <div class="q-ma-md">
      <grid page="/" title="SKOLASTIK" caption="TO UTBK Paket 1"/>
      <grid page="/" title="MATEMATIKA" caption="TO UTBK Paket 1"/>
      <grid page="/" title="B. INGGIS" caption="TO UTBK Paket 1"/>
      <grid page="/" title="B. INDONESIA" caption="TO UTBK Paket 1"/>
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/tryOut/pelajaran/ctoPelajaran.vue";
export default {
  components: {
    grid
  }
};
</script>