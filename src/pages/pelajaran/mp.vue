<template>
  <div class="q-ma-md">
    <div v-if="$route.params.submenu == 'modul'">
      <grid page="/" title="MATEMATIKA"/>
      <grid page="/fisika9/Kelas 9" title="FISIKA"/>
      <grid page="/" title="BIOLOGI"/>
      <grid page="/" title="BAHASA INDONESIA"/>
      <grid page="/" title="BAHASA INGGRIS"/>
    </div>
    <div v-else-if="$route.params.submenu == 'postTest'">
      <grid page="/" title="MATEMATIKA"/>
      <grid page="/fisika9/postTest/Kelas 9" title="FISIKA"/>
      <grid page="/" title="BIOLOGI"/>
      <grid page="/" title="BAHASA INDONESIA"/>
      <grid page="/" title="BAHASA INGGRIS"/>
    </div>
    <div v-else-if="$route.params.submenu == 'tryOut'">

    </div>
    <div v-else-if="$route.params.submenu == 'bankSoal'">

    </div>
    <div v-else-if="$route.params.submenu == 'tryOut'">

    </div>
  </div>
</template>
<script>
import grid from "components/pelajaran/cpelajaran.vue";
export default {
  components: {
    grid
  },

  data() {
    return {

    };
  }
};
</script>