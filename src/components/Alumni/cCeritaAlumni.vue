<template>
  <q-card @click="navigate()">
    <q-item>
      <q-item-section avatar>
        <q-avatar square style="height:60px;width:60px">
          <img  :src="`${imgurl}`" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="txt-left">
        <q-item-label class="font4 fs14" :class="`${color}`">{{title}} OK</q-item-label>
        <q-item-label caption class="font4 fs12">{{caption}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>
<script>
export default {
    props : {
        title : '',
        caption: '',
        page: '',
        color: '',
        imgurl: ''
    },
    methods : {
        navigate() {
            let self = this
            self.$router.push({path: self.page})
        }
    }
}
</script>