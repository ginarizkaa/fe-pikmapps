<template>
  <div>
    <div class="ctr q-pt-md">
      <div>
        <img src="statics/img/temanPikma2.png" />
      </div>
      <div class="q-px-md">
        <grid
          v-for="idx in data"
          :title="`${idx.title}`"
          :caption="`${idx.caption}`"
          :price="`${idx.price}`"
          :page="'temanPikma/'+`${idx.title}`+'/'+`${idx.caption}`+'/'+`${idx.price}`"
        />
      </div>
    </div>
  </div>
</template>

<style lang="stylus"></style>
<script>
import grid from "components/temanPikma/ctemanPikma.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      data: [
        {
          title: "KEJAR !",
          caption:
            "5 Paket TryOut. Akses pembahasan soal, dan akses konsultasi online (2 bulan).",
          price: "150000"
        },
        {
          title: "TRY OUT ITB !",
          caption: "Spesial TryOut ITB, serempak!",
          price: "15000"
        },
        {
          title: "TRY OUT UI !",
          caption: "Spesial TryOut ITB, serempak!",
          price: "15000"
        }
      ]
    };
  }
};
</script>