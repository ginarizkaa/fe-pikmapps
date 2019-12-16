<template>
  <div class="flex flex-center">
    <div class="q-mt-md q-mx-sm">
      <img src="statics/img/kenalDiri.png" />
    </div>
    <div class="q-mx-sm">
      <a href="https://www.16personalities.com/id">
        <img src="statics/img/testMBTI.png" width="340px" />
      </a>
    </div>
    <q-card class="q-mx-md">
      <q-card-section class="bg-color-greyy text-black">
        <div class="font2 ctr">APA HASIL TEST KAMU?</div>
      </q-card-section>
      <q-card-section>
        <div class="row ctr">
          <div class="col-3">
            <grid page="/grit/kd2/ENFJ" color="yellow" label="ENFJ" />
          </div>
          <div class="col-3">
            <grid page color="yellow" label="INFJ" />
          </div>
          <div class="col-3">
            <grid page color="blue" label="INTJ" />
          </div>
          <div class="col-3">
            <grid page color="blue" label="ENTJ" />
          </div>
          <div class="col-3">
            <grid page color="red" label="ENFP" />
          </div>
          <div class="col-3">
            <grid page color="red" label="INFP" />
          </div>
          <div class="col-3">
            <grid page color="green" label="INTP" />
          </div>
          <div class="col-3">
            <grid page color="green" label="ENTP" />
          </div>
          <div class="col-3">
            <grid page color="indigo" label="ESFP" />
          </div>
          <div class="col-3">
            <grid page color="indigo" label="ISFP" />
          </div>
          <div class="col-3">
            <grid page color="grey" label="ISTP" />
          </div>
          <div class="col-3">
            <grid page color="grey" label="ESTP" />
          </div>
          <div class="col-3">
            <grid page color="lime" label="ESFJ" />
          </div>
          <div class="col-3">
            <grid page color="lime" label="ISFJ" />
          </div>
          <div class="col-3">
            <grid page color="teal" label="ISTJ" />
          </div>
          <div class="col-3">
            <grid page color="teal" label="ESTJ" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import grid from "components/grit/cBtnKenalDiri.vue";
export default {
  data() {
    return {};
  },
  components: {
    grid
  }
};
</script>