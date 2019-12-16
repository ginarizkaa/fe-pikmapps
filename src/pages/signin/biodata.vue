<template>
  <div class="q-pa-md">
    <div class="font1 line40 q-pa-md">
      <p class="blue" style="font-size: 50px;">
        mari jadi
        <br />#temanjoeang!
      </p>
    </div>
    <div class="font2 line20 q-px-md">
      <p
        class="blue font4 fs14"
      >Kami ingin tahu lebih tentang kamu. tak sabar untuk kita jadi #temanjoeang bareng!</p>
    </div>

    <q-card class="my-cardreg relative-position">
      <q-card-section class="relative-position">
        <div class="ctr" style="margin-top:-65px">
          <q-avatar size="90px">
            <img src="statics/img/d.png" />
          </q-avatar>
          <img
            src="statics/icon/camera.png"
            style="margin-left:-30px;margin-top:50px;position: absolute;"
            width="40px"
            height="40px"
          />
        </div>
        <q-form class="q-gutter-md">
          <p class="fusual">Nama Lengkap</p>
          <q-input rounded outlined size="md" v-model="nama" />
          <p class="fusual">No. WhatsApp</p>
          <q-input rounded outlined />
          <p class="fusual">Email</p>
          <q-input rounded outlined bg-color="grey-4" v-model="email" />
          <!-- <div class="row">
            <div class="col-8">
              <p class="fusual2">Alamat</p>
              <q-input rounded outlined v-model="alamat"/>
            </div>
            <div class="col">
              <p class="fusual2">Kode Pos</p>
              <q-input rounded outlined v-model="kodepos"/>
            </div>
          </div>-->
          <p class="fusual">Sekolah</p>
          <q-input rounded outlined v-model="sekolah"/>
          <div class="row">
            <div class="col">
              <p class="fusual2">Tingkat</p>
              <q-select rounded outlined v-model="model" :options="options" />
            </div>
            <div class="col">
              <p class="fusual2">Kelas</p>
              <q-select rounded outlined v-model="model2" :options="option2" />
            </div>
          </div>

          <center>
            <q-btn unelevated rounded color="grey" label="Simpan" style="width: 90%" @click="onSubmit()"/>
          </center>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="stylus">
// modifikasi
.q-field__control {
  height: 40px;
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
export default {
  data() {
    return {
      data : {
        nama: "a",
        notelp: "a",
        email: "a",
        alamat: "a",
        kodepos: "a",
        sekolah: "a",
        tingkat: "a",
        kelas: "a",
        beA: "a",
        toSay: "a"
      },
      model: null,
      model2: null,
      options: ["SD", "SMP", "SMA"],
      option2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      
    }
  },


  methods: {
    onSubmit() {    
      const self = this
      register.registerUser(window, self.data)
          .then(function (result) {
              if (!result) {
                  self.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "fas fa-exclamation-triangle",
                      message: "Failed to create data. Please Try Again!",
                      position: "top",
                      timeout: 500
                  });
          
              } else {
                  self.$q.notify({
                      color: "green-4",
                      textColor: "white",
                      icon: "fas fa-check-circle",
                      message: "Data has been create",
                      position: "top",
                      timeout: 500
                  });
                  
                  self.$router.push('/preMenu')
              }
          })
          .catch(function (err) {
              console.log(err);
          });
      }

  }
};
</script>