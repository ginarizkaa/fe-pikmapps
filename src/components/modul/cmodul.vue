<template>
  <q-card class="my-card" @click="navigate()">
    <q-item>
      <div class="row">
        <div class="col-4">
          <q-item-section avatar>
            <q-item-label class="font3 orange fs60">{{imgtext}}</q-item-label>
          </q-item-section>
        </div>
        <q-item-section class="txt-left">
          <q-item-label class="font3 fs1 blue">{{title}}</q-item-label>
          <q-item-label caption class="orange font4 fs14">{{caption}}</q-item-label>
        </q-item-section>
      </div>
    </q-item>
  </q-card>
</template>
<script>
export default {
  props: {
    title: "",
    caption: "",
    page: "",
    imgtext: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>