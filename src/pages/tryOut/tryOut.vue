<template>
  <div>
    <div class="bg-greyy">
      <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" style="margin:20px;" />
      <div class="font3 yellow fs4" style="margin-left:30px;margin-top:-30px">
        TRY
        <img style="height:50px;" src="statics/img/g10.png" />OUT
      </div>
      <div
        class="yellow font2"
        style="margin-left:30px;margin-top:-15px"
      >Uji sejauh mana kemampuan untuk raih mimpimu!</div>
    </div>
    <div class="q-ma-md">
      <grid page="/toj/tryOut/TO UN" title="TO UN" caption="Paket 1"/>
      <grid page="/toj/tryOut/TO UTBK" title="TO UTBK" caption="Paket 1"/>
      <grid2 title="TO UTBK" caption="Paket 1"/>
      <grid2 title="TO UTBK" caption="Paket 1"/>
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
import grid from "components/tryOut/ctryOut.vue";
import grid2 from "components/tryOut/ctryOutLock.vue";
export default {
  components: {
    grid,
    grid2
  }
};
</script>