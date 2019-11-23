<template>
  <q-card class="my-card" @click="navigate()">
    <div class="row items-center">
      <div class="col q-pt-sm">
        <q-item-section class="ctr">
          <q-item-label class="font3 orange fs60">{{imgtext}}</q-item-label>
        </q-item-section>
      </div>
      <div class="col">
        <q-item-section class="txt-left">
          <q-item-label class="font3 fs1 blue">{{title}}</q-item-label>
        </q-item-section>
      </div>
      <div class="col">
        <q-item-section>
          <!-- <q-avatar square style="height:70px;"> -->
          <img :src="`${imgurl}`" style="height:70px;"/>
          <!-- </q-avatar> -->
        </q-item-section>
      </div>
    </div>
  </q-card>
</template>
<script>
export default {
  props: {
    title: "",
    caption: "",
    page: "",
    imgtext: "",
    imgurl: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>