<template>
  <div>
    <div class="bg-grit-surat">
      <div class="q-mx-lg">
        <div class="font3 yellow fs1">
          SURAT DARI MASA DEPAN
          <!-- <img style="height:50px;" src="statics/img/g9.png" /> -->
        </div>
        <div
          class="font2 white q-pt-sm"
        >Surat dari masa depan adalah surat dari kamu di masa depan untuk kamu sekarang. Entah itu sebuah teguran, nasihat, terserah kamu, yang jelas kamu di masa depan pasti berharap banyak sama kamu yang sekarang!</div>
      </div>
    </div>
    <q-card class="q-ma-md">
      <q-card-section>
        <div class="q-ma-md">
             <q-input v-model="text" label="Dear..." stack-label :dense="dense" />
          <br />
          <q-input filled type="textarea"/>
        </div>
        <div class="q-ma-md" style="text-align: right">
          <q-btn unelevated rounded color="yellow-12">
            <div class="dark-blue">Kirim</div>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {};
</script>