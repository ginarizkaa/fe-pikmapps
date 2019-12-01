<template>
    <div v-if="`${label2}` !== 'null'">
      <q-btn round color="yellow" size="xl" @click="navigate()">
        <div class="font2 fs14 dark-blue">
          <div style="margin-bottom:25px">{{label1}}</div>
          <div style="margin-top: -50px;">{{label2}}</div>
        </div>
      </q-btn>
    </div>
    <div v-else>
      <q-btn round color="yellow" size="xl" @click="navigate()">
        <div class="font2 fs14 dark-blue">
          <div>{{label1}}</div>
        </div>
      </q-btn>
    </div>
</template>

<script>
export default {
  props: {
    label1: "",
    label2: "",
    page:"",
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>