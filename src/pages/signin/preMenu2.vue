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
        <q-input rounded outlined size="md" autofocus="true"/>
      </div>
      <q-btn
        unelevated
        rounded
        color="yellow"
        class="font2 q-mt-sm"
        text-color="black"
        label="submit"
        no-caps
        to="/preMenu3"
      />
    </center>
  </div>
</template>
<style lang="stylus">
//modifikasi
.q-field__control{
  height:25px;
  font-family: 'NeutraTextBook';
}
.q-field__native, .q-field__prefix, .q-field__suffix {
  color: rgb(71, 96, 172);
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>
