<template>
  <div class="q-pa-md">
    <!-- <q-card class="my-card">
      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Bingung Kuliah" name="bingungKuliah" />
        <q-tab label="Tips dan Trik Belajar" name="tipsTrik" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel
          name="bingungKuliah"
        >The QCard component is a great way to display important pieces of grouped content.</q-tab-panel>

        <q-tab-panel name="tipsTrik">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card> -->
    <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        hint="Debouncing 500ms"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
  </div>
</template>
<style lang="stylus">
.my-card {
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      tab: "tipsTrik"
    };
  }
};
</script>