<template>
  <div class="q-pa-md">
    <pdf src="/statics/pdf/pdf-test.pdf"></pdf>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn icon="favorite_border" color="teal-12" text-color="black"/>
      <q-btn icon="share" color="teal-12" text-color="black"/>
    </q-page-sticky>
  </div>
</template>
<style lang="stylus"></style>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf
  },
  data() {
    return {};
  }
};
</script>