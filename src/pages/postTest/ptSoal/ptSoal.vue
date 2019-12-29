<template>
  <div>
    <div style="background-image: url('statics/img/blue193.png'); height:180px;">
      <div style="padding:12px;">
        <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" />
      </div>
      <div class="headermargin font3 fs35 yellow">BAB 1</div>
      <div class="headermargin2 font3 fs35 yellow">TERMODINAMIKA</div>
      <q-btn size="xs" unelevated rounded color="yellow" style="margin-left:26px">
        <countdown class="q-ma-xs" :initial-value="900" />
      </q-btn>
    </div>
    <soal jmlSoal="3" :soal="soal" />
  </div>
</template>
<style lang="stylus">
.headermargin {
  margin-top: -15px;
  margin-left: 26px;
}

.headermargin2 {
  margin-top: -5px;
  margin-left: 26px;
}
</style>
<script>
import soal from "components/soal/cSoal.vue";
import countdown from "components/countDown/cCountDown";

export default {
  components: {
    soal,
    countdown
  },
  data() {
    return {
      items: ["A", "B", "C", "D", "E"],
      soal: [
        {
          img: "statics/img/soal.png"
        },
        {
          img: "statics/img/g5.png"
        },
        {
          img: "statics/img/g7.png"
        }
      ]
    };
  }
};
</script>