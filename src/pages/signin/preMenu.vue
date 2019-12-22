<template>
  <div class="q-pa-md">
    <h3 class="font1 blue ctr">
      aku ingin
      <br />jadi...
    </h3>
    <center>
      <div>
        <q-select
          class="fbg"
          rounded
          outlined
          bg-color="grey-2"
          v-model="model"
          :options="options"
        />
      </div>
      <q-btn
        size="sm"
        unelevated
        rounded
        color="yellow"
        class="font2 q-mt-sm"
        text-color="black"
        label="submit"
        no-caps 
        @click="onSubmit()"
      />
    </center>
    <div class="ctr" style="margin-top:20px">
      <img src="statics/img/g4.png" style="height: 300px" class="q-px-sm" />
      <img src="statics/img/g3.png" style="height: 300px" class="q-px-sm" />
    </div>
  </div>
</template>
<style lang="stylus">
// modifikasi
.q-field__control {
  height: 25px;
  font-family: 'NeutraTextBook';
}

.q-field__native, .q-field__prefix, .q-field__suffix {
  color: rgb(71, 96, 172);
}

.q-field--auto-height .q-field__native {
  min-height: 40px;
}

.q-field--auto-height .q-field__control {
  height: 40px;
}

.q-field--auto-height .q-field__control, .q-field--auto-height .q-field__native {
  min-height: 40px;
}

.q-field__marginal {
  height: 40px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 24px;
}
</style>
<script>

import register from "../../api/auth/index";
import { type } from 'os';

export default {
  data() {
    return {
      model: "Pilih...",
      options: [
        "Sosiolog",
        "Dokter",
        "Psikolog",
        "Programmer",
        "Arsitek",
        "Guru",
        "Pengacara"
      ],
      data: null
    };
  },

  mounted(){
    this.$set(this, 'data', this.$store.getters.getBiodata)
  },

  methods: {
    onSubmit() {    
      const self = this
      self.data.beA = self.model
      register.updateUserBiodata(window, self.data)
          .then(function (result) {
              if (!result) {
                  self.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "fas fa-exclamation-triangle",
                      message: "Failed to update Biodata. Please Try Again!",
                      position: "top",
                      timeout: 500
                  });
          
              } else {
                  self.$q.notify({
                      color: "green-4",
                      textColor: "white",
                      icon: "fas fa-check-circle",
                      message: "Biodata has been update",
                      position: "top",
                      timeout: 500
                  });
                  self.$store.commit('setData', self.data)
                  self.$router.push('/preMenu2')
              }
          })
          .catch(function (err) {
              console.log(err);
          });
      }

  }
};
</script>
