<template>
  <el-carousel class="imgstyle">
    <el-carousel-item v-for="(item, index) in cTopimages" :key="index">
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "detailswiper",
  props: {
    cTopimages: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>
<style>
.imgstyle {
  width: 100%;
  height: 250px;
}
.imgstyle img {
  width: 100%;
  height: 300px;
  padding-top: 0;
  overflow: hidden;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99bf9f;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #dfa4eb;
}
</style>
