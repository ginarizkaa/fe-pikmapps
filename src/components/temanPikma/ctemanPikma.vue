<template>
  <q-card class="tryOut">
    <q-card-section>
      <div class="row items-center">
        <div class="col-9">
          <q-item>
            <q-item-section class="txt-left">
              <q-item-label class="font4 fs30 black">{{title}}</q-item-label>
              <q-item-label caption class="gray2 font2 fs12">{{caption}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-3">
          <div class="ctr">
            <img
              src="statics/img/g4x.png"
              style="height: 80px; margin-bottom:-12px; margin-left:-30px;"
            />
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="bg-yellow">
      <div class="row items-center">
        <div class="col-9">
          <q-item>
            <q-item-section class="txt-left">
              <q-item-label class="font4 fs20 black">Rp {{price}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-3">
          <div class="ctr">
              <q-btn rounded size="sm" text-color="black" color="teal-12" label="Beli" no-caps  @click="navigate()"/>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<style lang="stylus">
.q-card__section {
  padding: 0px;
}
</style>
<script>
export default {
  props: {
    page: "",
    title: "",
    caption: "",
    price: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>