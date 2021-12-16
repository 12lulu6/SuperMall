<template>
  <div id="home">
    <homenavbar></homenavbar>
    <swiper :cbannerlist="bannerlist"></swiper>
    <homerecommend :crecommend="recommend"></homerecommend>
    <homefutureview></homefutureview>
    <tabcontrol
      :ctitle="['流行', '新款', '精选']"
      @hometabClick="controlClick"
    ></tabcontrol>
    <goodslist :cgoodslist="goods[currentType].list"></goodslist>
  </div>
</template>

<script>
import homenavbar from "./HomeChildren/HomeNavbar/HomeNavbar.vue";
import swiper from "../../components/common/Swiper/Swiper.vue";
import homerecommend from "./HomeChildren/HomeRecommend/HomeRecommend.vue";
import homefutureview from "./HomeChildren/HomeFutrueView/HomeFutureView.vue";
import tabcontrol from "../../components/common/TabControl/TabControl.vue";
import goodslist from "../../components/common/Goods/GoodsList.vue";

import { getHomeMutidata, getHomeGoods } from "../../network/home.js";
export default {
  name: "home",
  components: {
    homenavbar,
    swiper,
    homerecommend,
    homefutureview,
    tabcontrol,
    goodslist,
  },
  data() {
    return {
      bannerlist: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getMutidata();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    getMutidata() {
      getHomeMutidata().then((res) => {
        // console.log(res);
        this.bannerlist = res.data.data.banner;
        this.recommend = res.data.data.recommend;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    controlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
};
</script>

<style>
#home {
  height: 2000px;
}
</style>
