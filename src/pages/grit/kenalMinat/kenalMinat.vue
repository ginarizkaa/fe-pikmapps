<template>
  <div>
    <div class="q-mt-md q-mx-sm">
        <img src="statics/img/kenalDiri.png" />
    </div>
    <div class="q-mx-sm">
        <img src="statics/img/testMBTI.png" width="340px"/>
    </div>
    <!-- <q-card class="q-mx-sm">
      <q-card-section>
        <q-form class="q-gutter-md">
          <p class="fusual black">1. Ambil Test Minat</p>
          <q-btn
            rounded
            color="yellow"
            size="sm"
            class="q-ml-xl"
          ><div class="black">Test Minat</div></q-btn>
          <p class="fusual black">2. Lihat Hasil</p>
          <q-btn
            rounded
            color="yellow"
            size="sm"
            class="q-ml-xl"
          ><div class="black">Lihat</div></q-btn>
          <p class="fusual black">3. Kembali pada Aplikasi dan Input Hasil</p>
          <br />
        </q-form>
      </q-card-section>
    </q-card> -->
    <q-card class="q-mx-md">
      <q-card-section class="bg-color-greyy text-black">
        <div class="font2 ctr">APA HASIL TEST KAMU?</div>
      </q-card-section>
        <q-card-section>
            <div class="row ctr">
                <div class="col-3"><grid page="" color="yellow" label="ENFJ"/></div>
                <div class="col-3"><grid page="" color="yellow" label="INFJ"/></div>
                <div class="col-3"><grid page="" color="blue" label="INTJ"/></div>
                <div class="col-3"><grid page="" color="blue" label="ENTJ"/></div>
                <div class="col-3"><grid page="" color="red" label="ENFP"/></div>
                <div class="col-3"><grid page="" color="red" label="INFP"/></div>
                <div class="col-3"><grid page="" color="green" label="INTP"/></div>
                <div class="col-3"><grid page="" color="green" label="ENTP"/></div>
                <div class="col-3"><grid page="" color="indigo" label="ESFP"/></div>
                <div class="col-3"><grid page="" color="indigo" label="ISFP"/></div>
                <div class="col-3"><grid page="" color="grey" label="ISTP"/></div>
                <div class="col-3"><grid page="" color="grey" label="ESTP"/></div>
                <div class="col-3"><grid page="" color="lime" label="ESFJ"/></div>
                <div class="col-3"><grid page="" color="lime" label="ISFJ"/></div>
                <div class="col-3"><grid page="" color="teal" label="ISTJ"/></div>
                <div class="col-3"><grid page="" color="teal" label="ESTJ"/></div>
            </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import grid from "components/grit/cBtnMinat.vue";
export default {
  data() {
    return {};
  },
  components: {
      grid
  }
};
</script>