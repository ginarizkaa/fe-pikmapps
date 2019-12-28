<template>
  <div class="font3 fs20 black">{{ factor * hours }}:{{ factor * minutes }}:{{ factor * seconds }}</div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      required: true,
      default: 0
    },
    hourLabel: {
      type: String,
      default: "hours"
    },
    minuteLabel: {
      type: String,
      default: "minutes"
    },
    secondLabel: {
      type: String,
      default: "seconds"
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showHour: {
      type: Boolean,
      default: true
    },
    notifyEvery: {
      type: String,
      default: "second",
      validator: val => ["second", "minute", "hour", "none"].includes(val)
    }
  },
  data() {
    return {
      isMounted: false,
      value: this.initialValue,
      labelFontRatio: 0.15,
      numberFontRatio: 0.2,
      baseTime: 0
    };
  },
  computed: {
    hours() {
      return Math.floor(Math.abs(this.value) / 3600);
    },
    minutes() {
      return Math.floor((Math.abs(this.value) - this.hours * 3600) / 60);
    },
    seconds() {
      return this.is_single ? this.value : Math.abs(this.value) % 60;
    },
    factor() {
      return this.value >= 0 ? 1 : -1;
    },
  },
  methods: {
    notifyChange() {
      let output = { value: this.value };
      if (!this.is_single) {
        output = {
          ...output,
          ...{ seconds: this.seconds, minutes: this.minutes, hours: this.hours }
        };
      }
      this.$emit("update", output);
    },
    updateTime(seconds) {
      if (this.value) this.value += seconds;
      if (this.value < 0) {
        this.$emit("finish");
      }
    }
  },
  watch: {
    seconds() {
      if (this.notifyEvery === "second") {
        this.notifyChange();
      }
    },
    minutes() {
      if (this.notifyEvery === "minute" && !this.is_single) {
        this.notifyChange();
      }
    },
    hours() {
      if (this.notifyEvery === "hour" && !this.is_single) {
        this.notifyChange();
      }
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      this.isMounted = true;
      if (this.value) {
        const interval = setInterval(
          function() {
            if (this.paused) {
              return;
            }
            const delta = 1;
            this.value -= delta;
            if (this.value === 0) {
              this.$emit("finish");
            }
            if (this.value <= 0 && !this.showNegatives) {
              this.value = 0;
              clearInterval(interval);
            }
          }.bind(this),
          1000
        );
      }
    });
  }
};
</script>

<style scoped>
</style>