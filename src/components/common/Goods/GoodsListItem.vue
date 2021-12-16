<template>
  <div class="goodslistitem" @click="listItemClick(cgoodslistitem.iid)">
    <img :src="cgoodslistitem.show.img" alt="" />
    <div class="itemcontent">
      <p>{{ cgoodslistitem.title }}</p>
      &nbsp; <span class="price">{{ cgoodslistitem.orgPrice }}</span
      >&nbsp;
      <span class="collect">{{ cgoodslistitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: {
    cgoodslistitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    listItemClick(id) {
      console.log(id);
      this.$router.push("/detail/" + id);
    },
  },
};
</script>

<style>
.goodslistitem {
  font-size: 12px;
  flex: 1;
  height: 230px;
  margin: 0 5px 5px 0;
  width: calc((100% - 10px) / 2);
  min-width: calc((100% - 10px) / 2);
  max-width: calc((100% - 10px) / 2);
}
.goodslistitem:nth-child(2n) {
  margin-right: 0;
}
.goodslistitem img {
  width: 100%;
  height: 85%;
  border-radius: 5px;
  border: 2px solid #ea986c;
}
.itemcontent p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: #ea986c;
}
</style>
