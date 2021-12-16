<template>
  <el-carousel class="imgstyle">
    <el-carousel-item v-for="(item, index) in cbannerlist.list" :key="index">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "swiper",
  props: {
    cbannerlist: {
      type: Object,
      defalut: {},
    },
  },
};
</script>
<style>
.el-carousel__container {
  height: 230px !important;
}
.imgstyle {
  width: 100%;
  height: 195px;
}
.imgstyle img {
  width: 100%;
  padding-top: 44px;
  /* height: 100%; */
}
.el-carousel__item:nth-child(2n) {
  background-color: #99bf9f;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #dfa4eb;
}
</style>
