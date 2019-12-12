<template>
  <q-card class="tryOut" @click="navigate()">
    <div class="row items-center">
      <div class="col-7">
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font3 fs35 blue ">{{title}}</q-item-label>
            <q-item-label caption class="gray2 font2 fs25" style="margin-top:-8px">{{caption}}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="col-3">
            <div class="ctr" style="margin-left:-55px">
              <img src="statics/img/group19.png" style="height: 80px" />
            </div>
      </div>
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