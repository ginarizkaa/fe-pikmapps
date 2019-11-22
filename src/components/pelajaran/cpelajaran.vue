<template>
  <q-card class="pelajaran" @click="navigate()">
    <q-item class="pelajaran">
      <q-item-section class="txt-left">
        <q-item-label class="font3 fs30 orange">{{title}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  props: {
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