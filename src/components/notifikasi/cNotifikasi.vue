<template>
  <q-card @click="navigate()">
    <q-item v-if="`${status}` === 'Read' || `${status}` === 'read'">
      <q-item-section avatar>
        <q-avatar square style="height:30px;width:30px">
          <img src="statics/icon/notif.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="txt-left">
        <q-item-label class="font4 fs14" :class="`${color}`">{{title}}</q-item-label>
        <q-item-label caption class="font4 fs12">{{caption}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="`${status}` === 'Unread' || `${status}` === 'unread'">
      <q-item-section avatar>
        <q-avatar square style="height:30px;width:30px">
          <img src="statics/icon/notifUnread.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="txt-left">
        <q-item-label class="font4 fs14" style="font-weight:1000" :class="`${color}`">{{title}}</q-item-label>
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
        status: '',
    },
    methods : {
        navigate() {
            let self = this
            self.$router.push({path: self.page})
        }
    }
}
</script>