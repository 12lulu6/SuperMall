<template>
  <div class="homerecommend">
    <span
      v-for="(item, index) in crecommend.list"
      :key="index"
      class="recommenditem"
    >
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: "homerecommend",
  props: {
    crecommend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.homerecommend {
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
}
.recommenditem {
  flex: 1;
}
.homerecommend img {
  width: 60px;
  height: 60px;
}
</style>
