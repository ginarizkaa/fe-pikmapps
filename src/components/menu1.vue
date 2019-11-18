<template>
  <q-card class="my-card" @click="navigate()">
    <q-item>
      <q-item-section avatar>
        <q-avatar style="height:70px;">
          <img :src="`${imgurl}`" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="txt-left">
        <q-item-label class="font3 fs1" :class="`${color}`">{{title}}</q-item-label>
        <q-item-label caption class="orange">{{caption}}</q-item-label>
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