<template>
  <div>
    <q-img src="statics/img/materi/kelas10/fisika/bab1.1.jpg" />
    <div style="text-align:center">
      <q-btn
        unelevated
        rounded
        color="yellow-7"
        label="Post Test"
        style="margin:30px; width:120px"
        no-caps
        @click="navigate()"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      let self = this;
      self.$router.push("/posttest/Post Test");
    }
  }
};
</script>