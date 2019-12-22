<template>
  <div>
    <q-img src="statics/img/materi/kelas10/fisika/bab1.1.jpg" />
    <pdf src="/statics/pdfpdf-test.pdf"></pdf>
    <div style="text-align:center">
      <q-btn
        unelevated
        rounded
        color="yellow-7"
        label="Post Test"
        style="margin:30px; width:120px"
        no-caps
        @click="navigate()"
      />
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push("/");
    }
  }
};
</script>