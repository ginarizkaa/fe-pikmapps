<template>
  <div class="q-ma-md">
    <q-card class="pelajaran" @click="navigate()">
      <q-item>
          <q-item-label class="font3 fs35 orange">IPA</q-item-label>
      </q-item>
    </q-card>
    <q-card class="pelajaran" @click="navigate()">
      <q-item>
          <q-item-label class="font3 fs35 orange">IPA</q-item-label>
      </q-item>
    </q-card>
  </div>
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