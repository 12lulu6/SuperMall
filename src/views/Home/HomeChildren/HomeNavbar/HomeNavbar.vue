<template>
  <div class="homenavbar">
    <navbar>
      <template v-slot:meddle>新购物</template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../../components/common/Navbar/Navbar.vue";
export default {
  name: "homenavbar",
  components: {
    navbar,
  },
};
</script>

<style></style>
