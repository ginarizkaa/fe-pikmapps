<template>
  <q-layout view="lHh Lpr lFf">
    <HMainMenu v-if="['mainmenu'].indexOf($route.name) > -1"/>
    <HBelajar v-if="['belajar'].indexOf($route.name) > -1"/>
    <HModul v-if="['modul'].indexOf($route.name) > -1"/>
    <HPostTest v-if="['postTest'].indexOf($route.name) > -1"/>
    <HTryOut v-if="['tryOut', 'notif'].indexOf($route.name) > -1"/>
    <HBankSoal v-if="['bankSoal'].indexOf($route.name) > -1"/>
    <HGrit v-if="['grit'].indexOf($route.name) > -1"/>
    <HGlobal v-if="['global'].indexOf($route.name) > -1"/>
    <HRapor v-if="['rapor'].indexOf($route.name) > -1"/>
    <HTemanPikma v-if="['temanPikma'].indexOf($route.name) > -1"/>
    <HRapor2 v-if="['rapor2'].indexOf($route.name) > -1"/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FMain/>
  </q-layout>
</template>
<script>
import HMainMenu from "./hstatics/mainmenu.vue"
import HBelajar from "./hstatics/belajar.vue"
import FMain from "./footer/mainfooter.vue"
import HModul from "./hdynamics/modul.vue"
import HPostTest from "./hdynamics/postTest.vue"
import HTryOut from "./hdynamics/tryOut.vue"
import HBankSoal from "./hdynamics/bankSoal.vue"
import HGrit from "./hdynamics/grit.vue"
import HGlobal from "./hdynamics/global.vue"
import HRapor from "./hdynamics/rapor.vue"
import HTemanPikma from "./hstatics/temanPikma.vue"
import HRapor2 from "./hdynamics/rapor2.vue"
export default {
  components: {
    HMainMenu,
    HBelajar,
    FMain,
    HModul,
    HPostTest,
    HTryOut,
    HBankSoal,
    HGrit,
    HGlobal,
    HRapor,
    HTemanPikma,
    HRapor2,
  },
  
}
</script>