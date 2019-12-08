<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Cari Kakak..."
      color="yellow"
      bg-color="teal-12"
      class="text-white"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <grid v-for="idx in filteredTanya" 
    :nama="`${idx.nama}`"
    :univ="`${idx.univ}`" 
    :tahun="`${idx.tahun}`" 
    :profesi="`${idx.profesi}`"  
    caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid"  
    page="/signup"
    />
    
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
import grid from "components/Alumni/cKontakAlumni.vue";
export default {
    components: {
        grid
    },
  data() {
    return {
      search: "",
      dataKontak: [
        {
          nama: "Gina",
          univ: "UPNVJT",
          tahun: "2015",
          profesi: "IT Developer"
        },
        {
          nama: "Dindin",
          univ: "UNIKOM",
          tahun: "2014",
          profesi: "IT Developer"
        },
        {
          nama: "Dhira",
          univ: "UI",
          tahun: "2014",
          profesi: "Dokter Gigi"
        },
        {
          nama: "Dwi Gita",
          univ: "UNAIR",
          tahun: "2013",
          profesi: "Dokter Kulit"
        },
        {
          nama: "Irwienda",
          univ: "UNDIP",
          tahun: "2012",
          profesi: "Konsultan Hukum"
        },
      ]
    };
  },
  computed: {
    filteredTanya: function() {
      return this.dataKontak.filter(idx => {
        return (idx.nama).toLowerCase().match((this.search).toLowerCase());
      });
    }
  }
};
</script>