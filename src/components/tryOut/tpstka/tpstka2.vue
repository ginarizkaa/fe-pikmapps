<template>
  <q-card class="tpstka2" @click="navigate()">
    <div class="absolute-center">
      <p class="font3 fs50 white">{{title}}</p>
      <p caption class="blue font5 fs30 ctr" style="margin-top:-35px">{{caption}}</p>
    </div>
    <img
      src="statics/img/lock.png"
      style="height: 60px;width:60px; margin-left:100px"
      class="absolute-center"
    />
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