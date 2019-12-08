<template>
<div>
<q-toggle
        v-model="accept"
        checked-icon="check"
        color="red"
        class="font4"
        label="YA SAYA MENGERTI"
        unchecked-icon="clear"
      />
      <div style="text-align:right" class="q-ma-md">
  <q-btn
        color="yellow"
        rounded
        style="width:150px"
        text-color="positive"
        @click="navigate()"
    >MULAI !</q-btn>
    
      </div>
</div>
</template>

<script>
export default {
data() {
    return {
      accept: false,
    }
},
  props: {
    page: "",
    title: "",
    caption: ""
  },
  methods: {
    navigate() {
    if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Kamu harus menyetujui ketentuan'
        })
      }
      else {
      let self = this;
      self.$router.push({ path: self.page });
      }
    }
  }
};
</script>