<template>
  <center>
    <div class="q-ma-md">
      <div v-for="(item, index) in items" v-bind:key="item">
        <div v-if="index%2!==0">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>MODUL {{item}}</q-item-label>
                <q-item-label caption>Referensi lengkap soal per materi untuk belajar kamu!</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div v-else>
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <q-item-label>MODUL {{item}}</q-item-label>
                <q-item-label caption>Referensi lengkap soal per materi untuk belajar kamu!</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </div>
  </center>
</template>
<style lang="stylus">
.my-card {
  margin-bottom: 15px;
  text-align: left;
}
</style>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    };
  }
};
</script>