<template>
  <q-card class="ipa" @click="navigate()">
    <p class="font4 fs50 white absolute-center">IPA</p>
  </q-card>
</template>
<script>
export default {
  props: {
    page: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>