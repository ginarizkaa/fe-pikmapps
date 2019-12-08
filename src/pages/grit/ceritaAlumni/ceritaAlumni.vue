<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Cari Topik..."
      color="yellow"
      bg-color="teal-12"
      class="text-white"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <div class="q-pt-md">
      <grid v-for="idx in filteredTanya" class="q-mb-sm"
        :title="`${idx.judul}`"
        :caption="`${idx.penulis}`"
        page="/grit/ca2/Cerita Alumni 2"
        :imgurl="`${idx.foto}`"
      />
    </div>
  </div>
</template>
<style lang="stylus">
.q-field__control {
  font-family: 'NeutraTextBook';
}

.q-field__native, .q-field__prefix, .q-field__suffix {
  color: black;
}
</style>

<script>
import grid from "components/Alumni/cCeritaAlumni.vue";
export default {
  components: {
    grid
  },
  data() {
    return {
      tab: "tipsTrik",
      search: "",
      dataAlumni: [
        {
          judul: "Perjuangan Anak Petani untuk Masuk Universitas Indonesia",
          penulis: "Amar Khoerul Umam",
          foto: "statics/img/profile.png"
        },
        {
          judul: "Gap Year untuk Masuk Kedokteran",
          penulis: "Gugun Hitomi",
          foto: "statics/img/profile.png"
        },
        {
          judul: "SBMPTN berkali-kali untuk Masuk PTN",
          penulis: "Indah Andariya",
          foto: "statics/img/profile.png"
        },
        {
          judul: "Pulang Malam Demi Belajar di PIKMA",
          penulis: "Sandra Radinka",
          foto: "statics/img/profile.png"
        },
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataAlumni.filter(idx => {
        return idx.judul.toLowerCase().match((this.search).toLowerCase());
      });
    }
  }
};
</script>