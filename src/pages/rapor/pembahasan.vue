<template>
  <div>
    <div class="q-ma-sm ctr">
      <q-btn round color="yellow-14" disable size="10px" class="q-ma-xs">
        <div class="font3 dark-blue fs2">1</div>
      </q-btn>
      <q-btn
        round
        color="yellow-12"
        disable
        size="10px"
        class="q-ma-xs"
        v-for="(item) in button"
        v-bind:key="item"
      >
        <div class="font3 dark-blue fs2">{{item}}</div>
      </q-btn>
    </div>
    <div class="q-mt-lg ctr">
      <img src="statics/img/soal.png" />
    </div>
    <div class="q-mt-xl ctr">
      <q-btn color="blue-grey-4" class="q-ma-xs">
        <div class="font3 dark-blue fs2">B</div>
      </q-btn>
    </div>
    <div class="q-ma-sm">
        <q-icon name="today" />
        <label class="font5">Pembahasan</label>
    </div>
    <div class="ctr">
      <img src="statics/img/bahas.png" height="200px" width="100%"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      button: ["2", "3", "4", "5", "6", "7", "8", "9"]
    };
  }
};
</script>