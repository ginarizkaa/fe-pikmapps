<template>
  <div class="q-ma-md">
    <q-card class="my-card">
      <q-card-section>
        <q-item-label class="font3 fs30 blue ctr">KETENTUAN TEST</q-item-label>
      </q-card-section>

      <q-card-section class="font4">{{ lorem }}</q-card-section>

      <q-separator dark />
        <grid page="/toj/tryOut/TO UN 621" v-if="$route.params.title == 'TO UN 621'"/>
        <grid page="/toj/tryOut/TO UTBK 721" v-if="$route.params.title == 'TO UTBK 721'"/>
      <q-separator dark />
    </q-card>
  </div>
</template>
<script>
import grid from "components/tryOut/button.vue";
  
export default {
  components: {
    grid
  },
  data() {
    return {
      accept: false,
      lorem:
        "Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. Evaluasi belajar kamu dengan soal pilihan terbaik per materi. "
    };
  },
};
</script>