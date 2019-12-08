<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <q-form class="q-gutter-md">

          <p class="fusual fs12">Apa profesi/pekerjaan cita-cita kamu?<br />ex: Dokter, Software Engineer, Dosen</p>
          <q-input rounded outlined />
          <p class="fusual fs12">Ceritakan, Kamu ingin jadi *Dokter* yang bagaimana?<br />ex: Mau jadi Dokter terkenal yang baik hati, terus rajin bikin penelitian tentang diabetes</p>
          <q-input rounded outlined />
          <p class="fusual fs12">Manfaat apa yang kamu ingin berikan kepada keluarga/masyarakat dan lingkungan dengan menajdi *Dokter*?
              <br />ex: Setiap jumat mau bikin pemerikasaan gratis diabetes untuk masyarakat gak mampu, bikin penelitian sama farmakologi dan bikin gula bebas diabetes
          </p>
          <q-input rounded outlined />
          <p class="fusual fs12">Coba bayangkan kamu jadi Dokter, ceritaka apa lebih banyak apa aja yang akan kamu lakukan</p>
          <q-input rounded outlined />
          <p class="fusual fs12">Ceritakan keseharian yang akan kamu bayangkan ketika kamu jadi Dokter!</p>
          <q-input rounded outlined />
          

          <center>
            <img src="statics/img/g4.png" height="60px" width="40px" style="bottom : 0px" />
            <q-btn unelevated rounded color="yellow" class="font4 fs12 text-black" to="/grit/m2/Mimpi" label="Submit & Buat Rencana Berhasil" style="width: 90%"/>
          </center>
        </q-form>
      </q-card-section>
    </q-card>
  </div>

</template>
<style lang="stylus">
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
  data () {
    return {
      
      
    }
  }
}
</script>