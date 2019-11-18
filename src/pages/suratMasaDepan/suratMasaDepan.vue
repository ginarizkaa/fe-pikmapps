<template>
  <div>
    <div class="bg-greyy" style="background-image: url('./statics/img/group193.png')">
      <q-btn flat class="yellow" size="xl" disable icon="arrow_left" />
      <div class="q-ml-lg">
        <div class="font3 yellow fs1">
          SURAT DARI MASA DEPAN
          <!-- <img style="height:50px;" src="statics/img/g9.png" /> -->
        </div>
        <div
          class="yellow fs6"
          style="width:90%;"
        >Surat dari masa depan adalah surat dari kamu di masa depan untuk kamu sekarang. Entah itu sebuah teguran, nasihat, terserah kamu, yang jelas kamu di masa depan pasti berharap banyak sama kamu yang sekarang!</div>
      </div>
    </div>

    <div class="q-ma-md">
      <q-input label="Dear..." stack-label />
      <br />
      <q-input filled type="textarea" />
    </div>
    <div class="q-ma-md" style="text-align: right">
      <q-btn unelevated rounded color="yellow-12">
        <div class="dark-blue">Kirim</div>
      </q-btn>
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {};
</script>