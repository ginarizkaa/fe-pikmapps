<template>
  <q-card class="pelajaran" @click="navigate()">
    <q-item class="pelajaran">
      <q-item-section class="txt-left col-3">
        <q-item-label class="font3 fs20 orange">{{bab}}</q-item-label>
      </q-item-section>
      <q-item-section class="txt-left">
        <q-item-label class="font4 fs20 blue-tos">{{title}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  props: {
    bab: "",
    page: "",
    title: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>