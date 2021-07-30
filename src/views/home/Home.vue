<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend" />
      <feature-view />
      <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      />
      <goods-list :goodList="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getGoodsData } from "network/home.js";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  methods: {
    /* 
      事件监听的方法    
    */
    // 点击不同的分类，切换数据
    tabClick(index) {
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
    // 点击回到顶部
    backTopClick() {
      // 访问scroll组件中的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    // scroll组件传回position触发的事件
    contentScroll(position) {
      // 通过position的位置控制back-top图标的显示
      this.isShowBackTop = -position.y > 1000;
    },
    // 上拉加载更多
    loadMore() {
      this.getGoodsData(this.currentType)
    },
    /* 
      请求数据的方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getGoodsData(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  /* 首页高度是视口高度，防止被内容撑开 */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* 开启绝对定位，固定在nav-bar和tab-bar中间 */
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>