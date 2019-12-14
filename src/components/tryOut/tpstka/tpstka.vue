<template>
  <q-card class="tpstka" @click="navigate()">
    <div class="absolute-center">
      <p class="font3 fs50 white">{{title}}</p>
      <p caption class="blue font5 fs30 ctr" style="margin-top:-35px">{{caption}}</p>
    </div>
  </q-card>
</template>
<script>
export default {
  props: {
    page: "",
    title: "",
    caption: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>