<template>
  <q-card class="tryOut" @click="navigate()">
    <div class="row items-center">
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font3 fs35 gray2">{{title}}</q-item-label>
            <q-item-label caption class="blue-tos font2 fs20">{{caption}}</q-item-label>
          </q-item-section>
        </q-item>
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