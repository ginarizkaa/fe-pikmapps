<template>
  <div class="pagein">
    <div class="trashhand line40">
      <p class="blue" style="font-size: 50px;">
        hallo (nama)!
        <br />salam kenal
      </p>
    </div>
    <div class="neutrad_l line20">
      <p
        class="blue"
        style="font-size: 25px;"
      >Kami ingin tahu lebih tentang kamu. tak sabar untuk kita jadi #temanjoeang bareng!</p>
    </div>

    <q-card class="my-cardreg relative-position">
      <q-card-section class="relative-position">
        <div class="ctr" style="margin-top:-65px">
          <q-avatar size="90px">
            <img src="statics/img/d.png" />
          </q-avatar>
          <img
            src="statics/icon/camera.png"
            style="margin-left:-30px;margin-top:50px;position: absolute;"
            width="40px"
            height="40px"
          />
        </div>
        <q-form class="q-gutter-md">
          <p class="fusual">Nama</p>
          <q-input rounded outlined size="md"/>
          <p class="fusual">No. Telp</p>
          <q-input rounded outlined />
          <p class="fusual">Email</p>
          <q-input rounded outlined bg-color="grey-4" />
          <div class="row">
            <div class="col-8">
              <p class="fusual2">Alamat</p>
              <q-input rounded outlined />
            </div>
            <div class="col">
              <p class="fusual2">Kode Pos</p>
              <q-input rounded outlined />
            </div>
          </div>
          <p class="fusual">Sekolah</p>
          <q-input rounded outlined />
          <div class="row">
            <div class="col">
              <p class="fusual2">Tingkat</p>
              <q-select rounded outlined v-model="model" :options="options" />
            </div>
            <div class="col">
              <p class="fusual2">Kelas</p>
              <q-select rounded outlined v-model="model2" :options="option2" />
            </div>
          </div>

          <center>
            <q-btn unelevated rounded color="grey" label="Simpan" style="width: 90%"/>
          </center>
        </q-form>
      </q-card-section>
    </q-card>
    <div class="ctr" style="margin-top:20px">
    <img src="statics/icon/next.png" height="40px" width="120px" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: null,
      model2:null,
      options: [
        'SD', 'SMP', 'SMA'
      ],
      option2: [
        '1', '2', '3', '4', '5','6','7','8','9','10','11','12'
      ],
      
    }
  }
}
</script>