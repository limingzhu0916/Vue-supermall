<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="cate-content">
      <left-bar :categoryList="categoryList" />
    </scroll>
  </div>
</template>

<script>
import { getCategoryData } from "network/category.js";

import LeftBar from "./childComps/LeftBar.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from 'components/common/scroll/Scroll.vue';
export default {
  components: {
    LeftBar,
    NavBar,
    Scroll,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  created() {
    // 请求category的数据
    getCategoryData().then((res) => {
      this.categoryList = res.data.category.list;
    });
  },
};
</script>

<style scoped>
#category{
  height: 100vh;
}
.category-nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.cate-content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>