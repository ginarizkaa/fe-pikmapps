<template>
  <q-card class="bankSoal2" @click="navigate()">
    <div class="row items-center">
      <div class="col-9">
        <q-item>
          <q-item-section class="txt-left">
            <q-item-label class="font6 fs35 white ">{{title}}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="col-3">
            <div class="ctr" style="margin-left:0px">
              <img src="statics/img/group113.png" style="height: 80px" />
            </div>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    page: "",
    title: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>