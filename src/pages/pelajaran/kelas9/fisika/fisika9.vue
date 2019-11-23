<template>
  <div class="q-ma-md">
    <div v-if="$route.params.submenu == 'modul'">
      <grid page="/f9bab1/TERMODINAMIKA" title="TERMODINAMIKA" bab="BAB 1" />
      <grid page="/" title="LINGKARAN" bab="BAB 2" />
      <grid page="/" title="PERSAMAAN KUADRAT" bab="BAB 3" />
      <grid page="/" title="ENERGI" bab="BAB 4" />
      <grid page="/" title="LISTRIK" bab="BAB 5" />
      <grid page="/" title="BERAGAM" bab="BAB 6" />
      <grid page="/" title="MOMENTUM" bab="BAB 7" />
      <grid page="/" title="SENTRA PEGAS" bab="BAB 8" />
      <grid page="/" title="SQL" bab="BAB 9" />
    </div>
    <div v-else-if="$route.params.submenu == 'postTest'">
      <grid page="/pt/f9bab1/TERMODINAMIKA" title="TERMODINAMIKA" bab="BAB 1" />
      <grid page="/" title="LINGKARAN" bab="BAB 2" />
      <grid page="/" title="PERSAMAAN KUADRAT" bab="BAB 3" />
      <grid page="/" title="ENERGI" bab="BAB 4" />
      <grid page="/" title="LISTRIK" bab="BAB 5" />
      <grid page="/" title="BERAGAM" bab="BAB 6" />
      <grid page="/" title="MOMENTUM" bab="BAB 7" />
      <grid page="/" title="SENTRA PEGAS" bab="BAB 8" />
      <grid page="/" title="SQL" bab="BAB 9" />
    </div>
  </div>
</template>
<script>
import grid from "components/pelajaran/cbab.vue";
export default {
  components: {
    grid
  }
};
</script>