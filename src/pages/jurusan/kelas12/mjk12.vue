<template>
  <div class="q-ma-md">
    <grid1 page="/" />
    <grid2 page="/" />
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