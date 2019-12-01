<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <q-form class="q-gutter-md">
          <p class="fusual">Kalau kamu gak punya nama, kamu pengen orang lain manggil kamu apa?<br /> ex: si jago desgin</p>
          <q-input rounded outlined/>
          <p class="fusual">Tuliskan 5 hal yang kamu senangi (boleh benda atau kegiatan)</p>
          <q-input rounded outlined />
          <p class="fusual">Tuliskan 5 hal yang paling kamu ga senangi</p>
          <q-input rounded outlined />
          <p class="fusual">Tuliskan 3 hal yang ingin kamu lakukan</p>
          <q-input rounded outlined />
          <p class="fusual">Tuliskan 3 hal yang ingin kamu lakukan untuk diri kamu sendiri</p>
          <q-input rounded outlined />
          <p class="fusual">Tuliskan 3 kegiatan yang bisa bikin mood kamu jadi senang</p>
          <q-input rounded outlined />
          

          <center>
            <img src="statics/img/g4.png" height="60px" width="40px" style="bottom : 0px" />
            <q-btn unelevated rounded color="grey" label="Simpan" style="width: 90%"/>
          </center>
        </q-form>
      </q-card-section>
    </q-card>
  </div>

</template>
<script>
export default {
  data () {
    return {
      
      
    }
  }
}
</script>