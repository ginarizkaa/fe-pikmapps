<template>
  <q-card class="my-card" @click="navigate()">
    <q-item>
      <div class="row">
        <div class="col-4">
          <q-item-section avatar>
            <q-item-label class="font3 orange  fs60">{{imgtext}}</q-item-label>
          </q-item-section>
        </div>
        <div class="col-4">
        <q-item-section class="txt-left">
          <q-item-label class="font3 fs1 blue">{{title}}</q-item-label>
        </q-item-section>
        </div>
        <div class="col-4" style=" text-align: right">
          <q-item-section avatar>
            <q-avatar style="height:70px;">
              <img src="statics/img/g4.png" />
            </q-avatar>
          </q-item-section>
        </div>
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