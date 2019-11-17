<template>
  <center>
    <div class="q-ma-md">
      <!-- kalo ga static pake v-for -->
      <!-- <div v-for="(item, index) in items" v-bind:key="item"> -->
      <!-- </div> -->
      <grid1
        title="Modul"
        caption="Referensi lengkap soal per materi untuk belajar kamu!"
        page="/signup"
        color="blue"
        imgurl="statics/img/g4.png"
      />
      <!-- <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar style="height:70px;">
        
              <img src="statics/img/g4.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section class="txt-left">
            <q-item-label class="font3 blue fs1">MODUL</q-item-label>
            <q-item-label
              caption
              class="orange"
            >Referensi lengkap soal per materi untuk belajar kamu!</q-item-label>
          </q-item-section>
        </q-item>
      </q-card> -->

      <grid2
        title="POST TEST"
        caption="Evaluasi belajar kamu disini. Pastikan kamu dapat sesuatu!"
        page="/"
        color="orange"
        imgurl="statics/img/g5.png"
      />

      <!-- <q-card class="my-card">
        <q-item>
          <q-item-section class="txt-right">
            <q-item-label class="font3 orange fs1">POST TEST</q-item-label>
            <q-item-label
              caption
              class="orange"
            >Evaluasi belajar kamu disini. Pastikan kamu dapat sesuatu!</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar style="height:70px;">
              <img src="statics/img/g5.png" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-card> -->

      <grid1
        title="TRY OUT"
        caption="Persiapkan masa depan kamu dengan rajin-rajin try out."
        page="/signup"
        color="cyan"
        imgurl="statics/img/g6.png"
      /> 

      <!-- <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar style="height:70px;">
              <img src="statics/img/g6.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="txt-left">
            <q-item-label class="font3 cyan fs1">TRY OUT</q-item-label>
            <q-item-label
              caption
              class="orange"
            >Persiapkan masa depan kamu dengan rajin-rajin try out.</q-item-label>
          </q-item-section>
        </q-item>
      </q-card> -->

      <grid2
        title="BANK SOAL"
        caption="Referensi soal UTBK, Ujian Mandiri, Swasta dan Kedinasan."
        page="/signup"
        color="dark-blue"
        imgurl="statics/img/g7.png"
      /> 

      <!-- <q-card class="my-card">
        <q-item>
          <q-item-section class="txt-right">
            <q-item-label class="font3 dark-blue fs1">BANK SOAL</q-item-label>
            <q-item-label
              caption
              class="orange"
            >Referensi soal UTBK, Ujian Mandiri, Swasta dan Kedinasan.</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar style="height:70px;">
              <img src="statics/img/g7.png" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-card> -->

      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar style="height:70px;">
              <img src="statics/img/g8.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="txt-left">
            <q-item-label class="font3 orange fs1">KONSUL</q-item-label>
            <q-item-label
              caption
              class="orange"
            >Ada soal yang gak hisa atau gak bisa-bisa konse? Konsulkan kegundahanmu disini.</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </center>
</template>
<style lang="stylus">
.my-card {
  margin-bottom: 15px;
  height: 90px;
}
</style>
<script>
import grid1 from "components/menu1.vue";
import grid2 from "components/menu2.vue";
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    };
  },
  components: {
    grid1,
    grid2
  }
};
</script>