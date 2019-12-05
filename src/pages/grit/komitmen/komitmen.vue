<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <q-form class="q-gutter-md">
          <p class="fusual">Berapa jam sehari kamu akan belajar fokus sendiri/kelompok?</p>
          <q-input rounded outlined v-model="text1" />
          <p class="fusual">Berapa soal yang kamu pecahkan sehari?</p>
          <q-input rounded outlined v-model="text2" />
          <p class="fusual">Berapa jam per hari kamu bermain game/media sosial?</p>
          <q-input rounded outlined v-model="text3" />
          <p class="fusual">Berapa jam per minggu kamu main sama temen-temen?</p>
          <q-input rounded outlined v-model="text4" />
          <p class="fusual">Berapa jam per minggu kamu akan evaluasi kemampuan kamu?</p>
          <q-input rounded outlined v-model="text5" />
          <p class="fusual">Saya berkomitmen akan:</p>
          <p class="fusual">(Checklist poin-poin yang kamu komit. tidak harus semuanya)</p>
          <div v-for="(line, index) in lines" v-bind:key="index" class="row">
            <div style="width:100%; margin-bottom:-10px;">
              <div class="q-mb-xs">
                <q-input rounded outlined v-model="line.komit" placeholder="Saya berkomitmen untuk..." type="text" value=""/>
              </div>
              <div>
                <div class="txt-right">
                  <q-btn
                    v-if="index + 1 === lines.length"
                    @click="addLine"
                    icon="add"
                    size="sm"
                    round
                    class="q-mx-xs"
                  />
                  <q-btn class="q-mx-xs" @click="removeLine(index)" icon="delete" size="sm" round />
                </div>
              </div>
            </div>
          </div>

          <center>
            <q-btn unelevated rounded color="grey" label="Simpan" style="width: 90%" />
          </center>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="stylus">
.fusual {
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      lines: [],
      blockRemoval: true
    };
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1;
    }
  },
  methods: {
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.number === null);

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return;

      this.lines.push({
        komit: null
      });
    },
    removeLine(lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1);
    }
  },
  mounted() {
    this.addLine();
  }
};
</script>