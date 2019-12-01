<template>
<div class="q-pa-md">
  <center>
  <q-card class="my-card" @click="navigate()">
    <q-item>
      <div class="row">
        <div class="col-4">
          <q-item-section avatar>
            <q-item-label class="font3 orange fs60">IX</q-item-label>
          </q-item-section>
        </div>
		
        <q-item-section class="txt-left">
          <q-item-label class="font3 fs1 blue">KELAS 9</q-item-label>
          <q-item-label caption class="orange font4 fs14">okasdvsav sdasdv</q-item-label>
        </q-item-section>
      </div>
    </q-item>
  </q-card>
  </center>
</div>
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