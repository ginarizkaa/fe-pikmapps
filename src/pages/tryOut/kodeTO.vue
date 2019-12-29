<template>
    <div class="absolute-center" style="width: 100%; text-align:center">
      <q-btn
        unelevated
        rounded
        color="yellow"
        label="DAFTAR DENGAN KODE"
        class="font4 q-ma-sm"
        style="width: 60%;"
        text-color="black"
        @click="beli()"
      />
      <q-btn
        unelevated
        rounded
        color="yellow"
        label="DAFTAR TEMAN PIXMA"
        class="font4 q-ma-sm"
        style="width: 60%; "
        text-color="black"
        to="/temanPikma"
      />
      <q-btn
        unelevated
        rounded
        color="secondary"
        label="MASUKAN KODE"
        class="font4 q-ma-sm"
        style="width: 60%; margin-top:30px "
        text-color="black"
        to="/masukkanKode"
      />
    </div>
</template>
<script>
export default {
  methods : {
    beli() {
      let self = this
      console.log ("ini route", this.$route.params.title)
      self.$router.push("/temanPikma/"+this.$route.params.title+"/"+this.$route.params.caption+"/"+this.$route.params.price)
    }
  }
}
</script>