<template>
  <div class="tabbarcontrol">
    <div v-for="(item, index) in ctitle" :key="index" @click="tabClick(index)">
      <span :class="{ active: index == isactive }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  data() {
    return {
      isactive: 0,
    };
  },
  props: {
    ctitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.$emit("hometabClick", index);
      return (this.isactive = index);
    },
  },
};
</script>

<style>
.tabbarcontrol {
  display: flex;
  position: sticky;
  top: 44px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}
.tabbarcontrol div {
  flex: 1;
}
.tabbarcontrol span {
  padding: 0 2px 3px 2px;
}
.active {
  color: #ea986c;
  border-bottom: solid 2px #ea986c;
}
</style>
