<template>
  <q-card class="tryOut" @click="navigate()">
    <div class="row items-center">
      <div class="col-7">
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font3 fs35 blue ">{{title}}</q-item-label>
            <q-item-label caption class="gray2 font2 fs25" style="margin-top:-5px">{{caption}}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="col-5">
        <!-- <q-item> -->
          <q-item-section class="txt-left">
            <q-item-label class="gray2 font7 fs20" style="margin-top:-5px">Benar : {{benar}}</q-item-label>
            <q-item-label class="gray2 font7 fs20" style="margin-top:-5px">Salah : {{salah}}</q-item-label>
            <q-item-label class="red12 font7 fs20" style="margin-top:-5px">Score : {{score}}</q-item-label>
          </q-item-section>
        <!-- </q-item> -->
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    page: "",
    title: "",
    caption: "",
    benar:"",
    salah: "",
    score: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>