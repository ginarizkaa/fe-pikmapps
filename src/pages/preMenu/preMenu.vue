<template>
  <div>
    <h3 class="trashhand bluec">
      aku ingin
      <br />
      jadi...
    </h3>
    <center>
      <div class="q-mt-lg">
        <q-select
          class="btn-fixed-width"
          rounded
          outlined
          bg-color="grey-2"
          v-model="model"
          :options="options"
        />
      </div>
    </center>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      model: "Pilih...",
      options: ["Sosiolog", "Dokter", "Psikolog", "Programmer", "Arsitek", "Guru", "Pengacara"]
    };
  }
};
</script>
