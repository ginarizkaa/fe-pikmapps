<template>
  <q-card class="q-mt-sm">
    <q-item>
      <q-item-section class="txt-left">
        <q-item-label class="font4 fs14">Kak {{nama}}, Alumni {{univ}} {{tahun}}, {{profesi}}</q-item-label>
        <q-item-label caption class="font4 fs12">{{caption}}</q-item-label>
      </q-item-section>
    </q-item>
      <q-item-section align="right" class="q-pb-sm q-px-md">
        <q-btn
          style="width:75px;"
          size="sm"
          rounded
          label="Hubungkan"
          text-color="black"
          color="teal-12"
          :to="`${page}`"
        />
      </q-item-section>
  </q-card>
</template>
<script>
export default {
  props: {
    nama: "",
    univ: "",
    tahun: "",
    profesi: "",
    caption: "",
    page: ""
  }
  // methods : {
  //     navigate() {
  //         let self = this
  //         self.$router.push({path: self.page})
  //     }
  // }
};
</script>