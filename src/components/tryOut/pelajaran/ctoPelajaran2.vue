<template>
  <q-card class="toPelajaran" @click="navigate()">
      <div style="padding-top:10px;padding-left:20px" >
        <p class="font3 fs35 gray2" >{{title}}</p>
        <div class="row" style="margin-top:-25px">
          <div class="col-9">
            <p class="blue-tos font2 fs25">{{caption}}</p>
          </div>
          <div class="col-3">
            <p caption class="blue font2 fs25 ctr">{{done}}</p>
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
    caption: "",
    done: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>