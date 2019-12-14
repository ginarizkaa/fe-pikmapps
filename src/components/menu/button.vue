<template>
<div>
  <q-card class="transparent" flat style="height: 100px; width: 100px;" @click="navigate()">
    <div class="ctr">
      <img :src="`${imgurl}`" :style="`height:${height}px ; width:${width}px`" />
      <p style="margin-top:2px" class="font4">{{title}}</p>
    </div>
  </q-card>
  </div>
</template>
<script>
export default {
    props : {
        title : '',
        height: '',
        width:'',
        page: '',
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