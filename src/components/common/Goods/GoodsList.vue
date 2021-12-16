<template>
  <div class="goodslist">
    <goodslistitem
      v-for="(item, index) in cgoodslist"
      :key="index"
      :cgoodslistitem="item"
    >
    </goodslistitem>
  </div>
</template>

<script>
import goodslistitem from "./GoodsListItem.vue";
export default {
  name: "goodslist",
  components: {
    goodslistitem,
  },
  props: {
    cgoodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goodslist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
