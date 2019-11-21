<template>
  <div class="q-ma-md">
    
    <q-card class="pelajaran" @click="navigate()">
      <q-item class="pelajaran">
        <q-item-section class="txt-left col-3">
          <q-item-label class="font3 fs20 orange">bab 1</q-item-label>
        </q-item-section>
        <q-item-section class="txt-left">
          <q-item-label class="font4 fs20 blue-tos">PERSAMAAN QUADRAT</q-item-label>
        </q-item-section>
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