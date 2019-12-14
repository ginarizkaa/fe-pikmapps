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
    </q-card>-->
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Pertanyaanmu..."
      color="yellow"
      bg-color="teal-12"
      class="text-white"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-list bordered class="font4 rounded-borders q-mt-lg">
      <q-expansion-item v-for="(idx, index) in filteredTanya" expand-separator :label="`${idx.tanya}`" :key="index">
        <q-card>
          <q-card-section>{{idx.jawab}}</q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <!-- <input id="idSearch" type="text" placeholder="Search.." />
    <div id="idTanya">
      <p>saya bisa saja</p>
      <p>ngomong yang bener</p>
      <p>kenapa saya lucu</p>
      <p>pacar saya dia</p>
      <p>kamu bingung kan</p>
    </div>-->
  </div>
</template>
<style lang="stylus">
.my-card {
  width: 100%;
}

.q-field__control {
  font-family: 'NeutraTextBook';
}

.q-field__native, .q-field__prefix, .q-field__suffix {
  color: black;
}
</style>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      tab: "tipsTrik",
      search: "",
      dataTanya: [
        {
          tanya: "Gak bisa matematika, harus bagaimana?",
          jawab:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid."
        },
        {
          tanya: "Cara SKS yang efektif gimana?",
          jawab: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          tanya: "Gimana cara belajar bahasa inggris paling benar?",
          jawab:
            "Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam."
        },
        {
          tanya: "Kenapa gak masuk-masuk kalau belajar?",
          jawab: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          tanya: "Belajar sama temen atau sendiri?",
          jawab:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid."
        },
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataTanya.filter(idx => {
        return (idx.tanya).toLowerCase().match(this.search);
      });
    }
  }
};
</script>