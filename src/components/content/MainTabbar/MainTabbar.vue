<template>
  <div class="maintabbar">
    <tabbar class="tabbarimg">
      <tabbaritem path="/home" textcolor="#ea986c">
        <template v-slot:icon-img
          ><img src="../../../assets/img/tabbar/shouye.png" alt=""
        /></template>
        <template v-slot:icon-img-active
          ><img src="../../../assets/img/tabbar/shouyeactive.png" alt=""
        /></template>
        <template v-slot:icon-text>首页</template>
      </tabbaritem>

      <tabbaritem path="/sort" textcolor="#ea986c">
        <template v-slot:icon-img
          ><img src="../../../assets/img/tabbar/sort.png" alt=""
        /></template>
        <template v-slot:icon-img-active
          ><img src="../../../assets/img/tabbar/sortactive.png" alt=""
        /></template>
        <template v-slot:icon-text>分类</template>
      </tabbaritem>

      <tabbaritem path="/cart" textcolor="#ea986c">
        <template v-slot:icon-img
          ><img src="../../../assets/img/tabbar/cart.png" alt=""
        /></template>
        <template v-slot:icon-img-active
          ><img src="../../../assets/img/tabbar/cartactive.png" alt=""
        /></template>
        <template v-slot:icon-text>购物车</template>
      </tabbaritem>

      <tabbaritem path="/me" textcolor="#ea986c">
        <template v-slot:icon-img
          ><img src="../../../assets/img/tabbar/wode.png" alt=""
        /></template>
        <template v-slot:icon-img-active
          ><img src="../../../assets/img/tabbar/wodeactive.png" alt=""
        /></template>
        <template v-slot:icon-text>我的</template>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "../../common/Tabbar/Tabbar.vue";
import tabbaritem from "../../common/Tabbar/TabbarItem.vue";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style>
.tabbarimg img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
</style>
