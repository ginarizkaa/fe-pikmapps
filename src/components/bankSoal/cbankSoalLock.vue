<template>
  <q-card class="bankSoalLock" @click="navigate()">
    <div class="row items-center">
      <div class="col-9">
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font3 fs30 orange" :class="`${color}`">{{title}}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="col-3">
        <q-item>
          <q-item-section >
            <div class="ctr" >
              <img src="statics/img/lock.png" style="height: 40px" />
            </div>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    page: "",
    title: "",
    color: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>