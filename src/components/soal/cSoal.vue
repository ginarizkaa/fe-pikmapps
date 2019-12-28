<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <q-btn-toggle
        class="q-mx-xs flex flex-center"
        size="sm"
        color="yellow"
        text-color="black"
        v-model="slide"
        :options="count"
      />
    </div>
    <q-carousel
      swipeable
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="yellow"
      class="transparent rounded-borders"
    >
      <q-carousel-slide
        v-for="(idx, index) in task"
        :key="(index+1).toString()"
        :name="(index+1).toString()"
        class="column"
      >
        <div class="q-mt-lg flex flex-center">
          <img :src="idx.img" />
        </div>
        <div class="q-mt-lg flex flex-center">
          <q-btn
            v-for="(item) in optional"
            v-bind:key="item"
            color="blue-grey-4"
            size="sm"
            class="q-ma-xs flex flex-center"
          >
            <div class="font3 dark-blue fs14">{{item}}</div>
          </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<style lang="stylus">
.row, .column, .flex {
  display: flex;
  flex-wrap: wrap;
}

.q-btn-group {
  border-radius: 3px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0), 0 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0);
}

.button {
  margin: 2px !important;
}

.q-carousel__slides-container {
  height: auto !important;
}

.q-carousel {
  height: auto !important;
}
</style>
<script>
export default {
  props: {
    jmlSoal: "",
    soal:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: "1",
      amount: this.$props.jmlSoal,
      task: this.$props.soal,
      optional: ["A", "B", "C", "D", "E"]
    };
  },
  computed: {
    count: function() {
      var i;
      var ok = [];
      for (i = 1; i <= this.amount; i++) {
        ok.push({ label: i, value: i.toString() });
      }
      return ok;
    }
  }
};
</script>