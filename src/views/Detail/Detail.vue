<template>
  <div id="detail">
    <detailnavbar :ctitle="['商品', '参数', '评论', '推荐']"></detailnavbar>
    <detailswiper :cTopimages="Topimages"></detailswiper>
    <h2>这是详情{{ iid }}</h2>
  </div>
</template>

<script>
import detailnavbar from "./DetailChildren/DetailNavbar.vue";
import detailswiper from "./DetailChildren/DetailSwiper.vue";
import { getDetailData, Goods } from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
  },
  data() {
    return {
      Topimages: [],
      goods: {},
    };
  },
  computed: {
    iid() {
      return this.$route.params.iid;
    },
  },
  created() {
    this.getData(this.iid);
  },
  methods: {
    getData(id) {
      getDetailData(id).then((res) => {
        console.log(res);
        const data = res.data.result;
        this.Topimages = data.itemInfo.topImages;
        this.goods = Goods(data.itemInfo, data.columns, data.shopInfo.services);
      });
    },
  },
};
</script>

<style></style>
