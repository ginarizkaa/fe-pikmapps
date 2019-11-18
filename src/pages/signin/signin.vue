<template>
  <div>
    <div style="text-align:center; margin-top: 50px; margin-bottom:-30px">
      <img src="statics/img/pikma_logo.png" height="50px" width="100px" />
    </div>
    <div>
      <h3 class="font1 blue ctr">
        masa depan
        <br />kamu dimulai
        <br />disini
      </h3>
    </div>
    <div style="margin-top: -40px">
      <p class="blue ctr">
        Siapkan dan Uji
        <br />kemampuan kamu.
      </p>
    </div>
    <div style="text-align:center; margin-top: 10px">
      <img src="statics/img/man.png" height="180px" width="150px" />
    </div>
    <div style="margin-top: 5px">
      <center>
        <q-btn
          unelevated
          rounded
          color="grey-3"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/fb_logo.png"
          label="Masuk Dengan Facebook"
          no-caps
        />
        <br />
        <br />
        <q-btn
          unelevated
          rounded
          color="grey-3"
          class="fbg"
          text-color="primary"
          icon="img:statics/icon/google_logo.png"
          label="Masuk Dengan Google"
          no-caps
          @click="navigate()"
        />
      </center>
    </div>
  </div>
</template>


<script>
export default {
  
  methods: {
    navigate() {
      this.$router.push("/signup")
    }
  }
}
</script>
