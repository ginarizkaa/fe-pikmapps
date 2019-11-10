<template>
  <div class="q-mt-xl q-pt-xl">
    <div class="q-px-xl q-pt-xl">
      <div class="q-mt-xl q-pt-xl">
        <q-select rounded outlined bg-color="grey-2" v-model="model" :options="options"/>
      </div>
    </div>
  </div>
</template>
<style lang="stylus"></style>
<script>
export default {
  data() {
    return {
      model: "Pilih...",
      options: ["Sosiolog", "Dokter", "Psikolog", "Programmer", "Arsitek"]
    };
  }
};
</script>
