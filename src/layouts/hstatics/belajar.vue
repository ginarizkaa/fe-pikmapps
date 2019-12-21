<template>
  <q-header elevated class="bg-header1">
    <q-toolbar class="bg-header1">
      <img src="statics/img/logo.png" height="37px" width="100px" />
      <q-space />
      <div v-if="aktif">
        <q-btn
          style="width:200px"
          unelevated
          class="fbg font4"
          rounded
          color="yellow"
          text-color="blue"
          size="md"
          label="KAMU TEMAN PIKMA"
          no-caps
        />
      </div>
      <div v-else>
        <q-btn
          style="width:200px"
          unelevated
          class="fbg font4"
          rounded
          color="red"
          text-color="yellow"
          size="md"
          label="AKTIFKAN TEMAN PIKMA"
          no-caps
          to="/temanPikma"
        />
      </div>

      <q-space />
      <img src="statics/icon/logo_notif.png" height="30px" width="30px" style="bottom : 0px" @click="navigate()"/>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  data() {
    return {
      aktif: true
    };
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push('/notif/NOTIFIKASI');
    }
  }
};
</script>