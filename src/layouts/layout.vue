<template>
  <q-layout view="lHh Lpr lFf">
    <HMainMenu v-if="['mainmenu'].indexOf($route.name) > -1"/>
    <HModul v-if="['modul'].indexOf($route.name) > -1"/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FMain/>
  </q-layout>
</template>
<script>
import HMainMenu from "./hstatics/mainmenu.vue"
import FMain from "./footer/mainfooter.vue"
import HModul from "./hdynamics/modul.vue"
export default {
  components: {
    HMainMenu,
    FMain,
    HModul
  },
  
}
</script>