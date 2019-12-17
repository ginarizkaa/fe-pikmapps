<template>
  <div  style="background-image: url('statics/img/group193.png'); background-color:#F8F8F8; height:640px; margin-top:-50px;">
    <h3 class="font1 blue ctr" style="padding-top:50px;">
      sampaikan
      <br />
      salam
      <br />
      pada masa
      <br />
      depan kamu!
    </h3>
    <center>
      <div class="q-mx-xl">
        <q-input rounded outlined size="md" v-model="toSay"/>
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
  </div>
</template>
<style lang="stylus">
//modifikasi
.q-field__control{
  height:40px;
  font-family: 'NeutraTextBook';
}
.q-field__native, .q-field__prefix, .q-field__suffix {
  color: rgb(71, 96, 172);
}
</style>
<script>
import register from "../../api/auth/index";

export default {
  data() {
    return {
      toSay: null,
      data: null,
      autofocus: false
    };
  },

  mounted(){
    this.$set(this, 'data', this.$store.getters.getBiodata)
  },

  methods: {
    onSubmit() {    
      const self = this
      self.data.toSay = self.toSay
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
                  self.$router.push('/preMenu3')
              }
          })
          .catch(function (err) {
              console.log(err);
          });
      }

  }
};
</script>
