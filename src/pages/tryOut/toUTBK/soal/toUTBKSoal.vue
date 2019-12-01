<template>
  <div>
    <div style="background-image: url('statics/img/gray17.png'); height:180px;">
      <div style="padding-top:30px; padding-left:20px;">
        <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" />
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font3 fs35 yellow">MATEMIATIKA</q-item-label>
            <q-item-label caption class="blue-tos font2 fs30">TO UTBK Paket 1</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <div class="q-ma-sm ctr">
      <q-btn round color="yellow-14" disable size="10px" class="q-ma-xs">
        <div class="font3 dark-blue fs2">1</div>
      </q-btn>
      <q-btn round color="yellow-12" disable size="10px" class="q-ma-xs" v-for="(item) in button" v-bind:key="item">
        <div class="font3 dark-blue fs2">{{item}}</div>
      </q-btn>
    </div>
    <div class="q-mt-lg ctr">
      <img src="statics/img/soal.png" />
    </div>
    <div class="q-mt-xl ctr">
      <q-btn v-for="(item) in items" v-bind:key="item" color="blue-grey-4" disable class="q-ma-xs">
        <div class="font3 dark-blue fs2">{{item}}</div>
      </q-btn>
    </div>
    <q-btn unelevated rounded color="yellow" class="q-ma-lg font3" to="/toUTBK2"><p class="fs25 blue q-mt-md">00:15:23</p></q-btn>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      items: ["A", "B", "C", "D", "E"],
      button : ["2","3","4","5", "6","7","8", "9"]
    };
  }
};
</script>