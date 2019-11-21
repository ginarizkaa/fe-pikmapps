<template>
  <div class="q-ma-md">
    <grid1 page="/mpipa/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
    <grid2 page="/mpips/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
    <grid1 page="/mpipa/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
    <grid2 page="/mpips/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
    <grid1 page="/mpipa/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
    <grid2 page="/mpips/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
    <grid1 page="/mpipa/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
    <grid2 page="/mpips/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
  </div>
</template>
<script>
import grid1 from "components/jurusan/ipa.vue";
import grid2 from "components/jurusan/ips.vue";
export default {
  components: {
    grid1,
    grid2
  }
};
</script>