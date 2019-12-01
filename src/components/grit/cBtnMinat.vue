<template>
  <q-btn :color="`${color}`" size="md" @click="navigate()" class="q-mt-md">
    <div class="font2 fs14 dark-blue">
      {{label}}
    </div>
  </q-btn>
</template>

<script>
export default {
  props: {
    label: "",
    color: "",
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