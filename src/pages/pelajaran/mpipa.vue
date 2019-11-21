<template>
  <div class="q-ma-md">
    <grid page="/" title="MATEMATIKA"/>
    <grid page="/fisika10/Kelas 10" title="FISIKA T" v-if="$route.params.title == 'Kelas 10'"/>
    <grid page="/" title="FISIKA"/>
    <grid page="/" title="KIMIA"/>
    <grid page="/" title="BIOLOGI"/>
    <grid page="/" title="BAHASA INDONESIA"/>
    <grid page="/" title="BAHASA INGGRIS"/>
  </div>
</template>
<script>
import grid from "components/pelajaran/cpelajaran.vue";
export default {
  components: {
    grid
  }
};
</script>