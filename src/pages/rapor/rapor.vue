<template>
  <div>
    <q-card class="q-ma-lg card2">
      <div class="row">
        <div class="col">
          <div class="q-mt-md q-ml-md font8 fs20">Penilaian</div>
          <grid title="TPS" benar="30" salah="40" waktu="01:20" page="/" />
          <div style="height:2px; background-color:grey;margin-bottom:5px" class="q-ml-md" />
          <grid title="TKA" benar="30" salah="40" waktu="01:20" page="/" />
        </div>
        <div class="col">
          <img src="statics/img/g1.png" class="imganaksma" />
        </div>
      </div>
    </q-card>
    <q-card class="q-ma-lg card4">
      <div class="row">
        <div class="col">
          <div class="q-ma-md">
            <img src="statics/img/confetti.png" />
          </div>
        </div>
        <div class="col q-ma-md" style="text-align:center">
          <div style="margin-top:-5px">
            <label class="font3 fs30">SCORE</label>
          </div>
          <div style="margin-top:-20px">
            <label class="font3 fs50">593</label>
          </div>
        </div>
      </div>
    </q-card>
    <div style="text-align:center">
        <q-btn
            rounded
            class="font7"
            color="yellow"
            text-color="red"
            label="AJUKAN PROGRAM STUDI PIL 1"
            @click="sort2()"
        />
    </div>
    <div style="text-align:center" class="q-mt-md">
        <q-btn
            rounded
            class="font7"
            color="yellow"
            text-color="red"
            label="AJUKAN PROGRAM STUDI PIL 2"
            @click="sort2()"
        />
    </div>
  </div>
</template>
<style>
.card2 {
  height: 200px;
  background-color: #faf7f7;
}
.card4 {
  height: 115px;
  background-color: dimgrey;
  color: white;
}
.imganaksma {
  height: 180px;
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
<script>
import grid from "components/rapot/rapor.vue";
export default {
  data() {
    return {};
  },
  components: {
    grid
  }
};
</script>