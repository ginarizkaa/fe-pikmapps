<template>
  <div class="q-ma-md">
    <div v-if="$route.params.submenu == 'modul'">
      <grid1 page="/mpipa/modul/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
      <grid2 page="/mpips/modul/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
      <grid1 page="/mpipa/modul/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
      <grid2 page="/mpips/modul/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
      <grid1 page="/mpipa/modul/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
      <grid2 page="/mpips/modul/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
      <grid1 page="/mpipa/modul/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
      <grid2 page="/mpips/modul/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
    </div>
    <div v-if="$route.params.submenu == 'postTest'">
      <grid1 page="/ppipa/postTest/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
      <grid2 page="/ppips/postTest/Kelas 9" v-if="$route.params.title == 'Kelas 9'"/>
      <grid1 page="/ppipa/postTest/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
      <grid2 page="/ppips/postTest/Kelas 10" v-if="$route.params.title == 'Kelas 10'"/>
      <grid1 page="/ppipa/postTest/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
      <grid2 page="/ppips/postTest/Kelas 11" v-if="$route.params.title == 'Kelas 11'"/>
      <grid1 page="/ppipa/postTest/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
      <grid2 page="/ppips/postTest/Kelas 12" v-if="$route.params.title == 'Kelas 12'"/>
    </div>
    <div v-if="$route.params.submenu == 'tryOut'">
      <grid1 page="/toUN" v-if="$route.params.title == 'TO UN'"/>
      <grid2 page="/toUN" v-if="$route.params.title == 'TO UN'"/>
      <grid1 page="/toUTBK" v-if="$route.params.title == 'TO UTBK'"/>
      <grid2 page="/toUTBK" v-if="$route.params.title == 'TO UTBK'"/>
    </div>
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