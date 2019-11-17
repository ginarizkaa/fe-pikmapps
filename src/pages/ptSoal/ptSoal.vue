<template>
  <div>
    <div style="background-image: url('statics/img/blue193.png'); height:180px;">
      <div style="padding-top:75px; padding-left:30px;">
        <p class="font3 yellow fs2">
          BAB 1
          <br />TERMODINAMIKA
        </p>
      </div>
    </div>
    <div class="q-ma-sm ctr">
      <q-btn round color="yellow-14" disable class="q-ma-xs">
        <div class="font3 dark-blue fs2">1</div>
      </q-btn>
      <q-btn round color="yellow-12" disable class="q-ma-xs">
        <div class="font3 dark-blue fs2">2</div>
      </q-btn>
      <q-btn round color="yellow-12" disable class="q-ma-xs">
        <div class="font3 dark-blue fs2">3</div>
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
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      items: ["A", "B", "C", "D", "E"]
    };
  }
};
</script>