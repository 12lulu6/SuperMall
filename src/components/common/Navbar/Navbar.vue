<template>
  <div class="navbar">
    <span class="left"><slot name="left"></slot></span>
    <span class="meddle"><slot name="meddle"></slot></span>
    <span class="right"><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  z-index: 100;
  background-color: #ea986c;
}
.left,
.right {
  width: 60px;
}
.left img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.meddle {
  flex: 1;
  /* font-size: 20px; */
}
</style>
