<template>
  <div>
    <div>
      <div class="bg-grit-saya">
        <div class="q-mx-md q-pt-sm">
          <div>
            <div class="font2 white q-pt-sm">
              Pada "Saya", kamu harus menilai apa saja yang kamu miliki untuk mencapai mimpi kamu.
              <br />I HAVE - sebutkan sebanyak mungkin apa yang kamu miliki di lingkungan kamu yang dapat membantu kamu mewujudkan tujuan hidup/mimpi kamu.
              <br />Misal: Ortu Supportive, akses bimbel, dll.
              <br />
              <br />I AM - sebutkan sebanyak mungkin kekuatan yang kamu miliki yang mendukung proses kamu mencapai tujuan hidup/mimpi kamu.
              <br />Misal: cepat menangkap pelajaran hafalan, tidak malu bertanya, punya banyak teman yang pintar.
            </div>
          </div>
        </div>
      </div>
    </div>
    <center>
      <div>
        <div class="q-ma-md">
          <div class="row">
            <div class="col q-mx-xs">
              <q-form class="q-gutter-md">
                <q-input rounded outlined placeholder="I HAVE" disable bg-color="grey-4" />
                <div v-for="(line, index) in lines" v-bind:key="index" class="row">
                  <div style="width:100%; margin-bottom:-10px;">
                    <div class="q-mb-xs">
                      <q-input rounded outlined v-model="line.have" placeholder="I Have..." type="text" value=""/>
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
              </q-form>
            </div>
            <div class="col q-mx-xs">
              <q-form class="q-gutter-md">
                <q-input rounded outlined placeholder="I AM" disable bg-color="grey-4" />
                <div v-for="(line2, index) in lines2" v-bind:key="index" class="row">
                  <div style="width:100%; margin-bottom:-10px;">
                    <div class="q-mb-xs">
                      <q-input rounded outlined v-model="line2.iam" placeholder="I Am..." type="text" value=""/>
                    </div>
                    <div>
                      <div class="txt-right">
                        <q-btn
                          v-if="index + 1 === lines2.length"
                          @click="addLine2"
                          icon="add"
                          size="sm"
                          round
                          class="q-mx-xs"
                        />
                        <q-btn class="q-mx-xs" @click="removeLine2(index)" icon="delete" size="sm" round />
                      </div>
                    </div>
                  </div>
                </div>
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>
<style lang="stylus">
.my-card {
  margin-bottom: 15px;
  height: 90px;
}
//modifikasi
.q-field__control{
  height:40px;
  font-family: 'NeutraTextBook';
}
.q-field__native, .q-field__prefix, .q-field__suffix {
  color: rgb(71, 96, 172);
}

</style>
<script>
export default {
  data() {
    return {
      lines: [],
      blockRemoval: true,
      lines2: [],
      blockRemoval2: true
    };
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1;
    },
    lines2() {
      this.blockRemoval2 = this.lines2.length <= 1;
    }
  },
  methods: {
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.number === null);

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return;

      this.lines.push({
        have: null
      });
    },
    removeLine(lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1);
    },
    addLine2() {
      let checkEmptyLines = this.lines2.filter(line2 => line2.number === null);

      if (checkEmptyLines.length >= 1 && this.lines2.length > 0) return;

      this.lines2.push({
        iam: null
      });
    },
    removeLine2(lineId) {
      if (!this.blockRemoval2) this.lines2.splice(lineId, 1);
    }
  },
  mounted() {
    this.addLine();
    this.addLine2();
  }
};
</script>