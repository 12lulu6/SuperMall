<template>
  <div class="tabbaritem" @click="tabClick">
    <slot v-if="!isactive" name="icon-img"></slot>
    <slot v-else name="icon-img-active"></slot>
    <div :style="istextcolor"><slot name="icon-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: {
      type: String,
    },
    textcolor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    istextcolor() {
      return this.isactive ? { color: this.textcolor } : {};
    },
  },
  methods: {
    tabClick() {
      return this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tabbaritem {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.active {
  color: #ea986c;
}
</style>
