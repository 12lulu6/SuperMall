<template>
  <div id="detailnavbar">
    <navbar>
      <template v-slot:left
        ><img
          @click="returnhome"
          src="../../../assets/img/detail/return.png"
          alt=""
      /></template>
      <template v-slot:meddle>
        <div class="detailmeddle">
          <span
            class="meddleitem"
            v-for="(item, index) in ctitle"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/Navbar/Navbar.vue";
export default {
  name: "detailnavbar",
  components: {
    navbar,
  },
  props: {
    ctitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    returnhome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
#detailnavbar {
  text-align: center;
  margin-bottom: 44px;
}
.detailmeddle {
  display: flex;
  font-size: 14px;
}
.meddleitem {
  flex: 1;
}
</style>
