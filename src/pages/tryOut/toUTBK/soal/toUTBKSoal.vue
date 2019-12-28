<template>
  <div>
    <div style="background-image: url('statics/img/gray17.png'); height:180px;">
      <div style="padding:12px;">
        <q-btn flat icon="img:statics/icon/back1.png" @click="$router.go(-1)" />
      </div>
      <div class="headermargin font3 fs35 yellow">MATEMIATIKA</div>
      <div caption class="headermargin2 blue-tos font2 fs30">TO UTBK Paket 1</div>
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
      button: ["2", "3", "4", "5", "6", "7", "8", "9"],
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