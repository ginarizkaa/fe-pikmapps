<template>
  <div class="gritLock" >
    <div v-if="`${label2}` !== 'null'">
      <q-btn round color="yellow" size="xl"  @click="navigate()">
        <div>
          <div class="font2 fs14 dark-blue">
            <div>{{label1}}</div>
            <div style="margin-top: -25px;">{{label2}}</div>
          </div>
          <div style="margin-top:-25px">
            <img src="statics/img/lock.png" style="height: 30px" />
          </div>
        </div>
      </q-btn>
    </div>
    <div v-else>
      <q-btn round color="yellow" size="xl"  @click="navigate()">
        <div>
          <div class="font2 fs14 dark-blue">
            <div>{{label1}}</div>
          </div>
          <div style="margin-top:-10px">
            <img src="statics/img/lock.png" style="height: 30px" />
          </div>
        </div>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label1: "",
    label2: "",
    page: ""
  },
  methods: {
    navigate() {
      let self = this;
      self.$router.push({ path: self.page });
    }
  }
};
</script>