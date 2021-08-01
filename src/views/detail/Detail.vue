<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :topImages="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import { getDetailData } from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: null,
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDetailData(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
    });
  },
};
</script>

<style>
</style>