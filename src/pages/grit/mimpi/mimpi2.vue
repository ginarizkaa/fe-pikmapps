<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <q-form class="q-gutter-md">
          <p class="fusual fs12">
            Apa tujuan hidup kamu?
            <br />Top Level
          </p>
          <q-input rounded outlined />
          <p class="fusual fs12">
            Tulis misi-misi yang harus kamu lakukan agar mimpi kamu tercapai!
            <br />Middle Level
          </p>
          <br />
          <p class="fusual fs12">
            Pada tahap ini kamu menuliskan batu-batu loncatan yang harus kamu raih agar mimpi dan tujuan hidup kamu
            semakin dekat. Isiannya lebih ke tujuan-tujuan jangka menengah yang harus tetap mengarah dan terfokus pada tujuan hidup kamu!
          </p>
          <br />
          <br />
        </q-form>
        <div v-for="(line, index) in lines" v-bind:key="index" class="row">
          <div class="row q-mx-md" style="width:100%">
            <div class="col-8">
              <q-input 
                v-model="line.misi"
                placeholder="Tuliskan Sebuah Misi..."
                type="text"
                value=""
              />
            </div>
            <div class="col-4">
              <div class="txt-right">
                <q-btn
                  v-if="index + 1 === lines.length"
                  @click="addLine"
                  icon="add"
                  size="sm"
                  round
                />
                <q-btn @click="removeLine(index)" icon="delete" size="sm" round />
                
              </div>
            </div>
          </div>
        </div>
        <br />
        <q-btn class="font4 fs14 text-black q-ml-md" color="yellow" label="SUBMIT" to="/grit/m3/MISI" size="sm" />
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="stylus">
.q-field__native, .q-field__prefix, .q-field__suffix {

    color: rgb(71, 96, 172);
}
//modifikasi
.q-field__control{
  height:25px;
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
      lines:[],
      blockRemoval: true,

    };
  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine(){
      let checkEmptyLines = this.lines.filter(line => line.number === null)

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return

      this.lines.push({
        misi: null
      })
    },
    removeLine (lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId,1)
    }
  },
  mounted () {
    this.addLine();
  }
};
</script>