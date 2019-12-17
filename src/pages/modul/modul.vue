<template>
  <center>
    <div class="q-ma-md" v-for="item in modulDatas" v-bind:key="item.id">
      <grid
        :title="item.title"
        :caption="item.deskripsi"
        :page="item.page"
        :imgtext="item.imgtext"
      />
    </div>
  </center>
</template>
<style lang="stylus">
.my-card {
  margin-bottom: 15px;
  height: 90px;
}
</style>
<script>
import grid from "components/modul/cmodul.vue";
import modul from "../../api/modul/index";

export default {
  components: {
    grid
    
  },

  data() {
    return {
      modulDatas: null
    };
  },

  beforeCreate() {
    const self = this
    modul.getDataModuls(window)
        .then(function (result) {
            if (!result) {
                self.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "fas fa-exclamation-triangle",
                    message: "Failed to load data. Please Try Again!",
                    position: "top",
                    timeout: 500
                });
            } else {
                self.modulDatas = result
            }
        })
        .catch(function (err) {
            console.log(err);
        });
  }
};
</script>