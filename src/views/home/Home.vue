<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isShowTabControl"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad" />
      <home-recommend :recommend="recommend" />
      <feature-view />
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goodList="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
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

import { getHomeMultidata, getGoodsData } from "network/home.js";
import { itemListenerMixin, backTopMixin } from 'common/mixin.js'
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      tabControlOffsetTop: null,
      isShowTabControl: false,
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  activated() {
    // 在切换回该页面时，将保存下来的位置还原
    this.$refs.scroll.scrollTo(0, this.saveY, 10)
    // 重新刷新better-scroll
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 在切换到其他页面时，纪录当前页面滚动到的位置
    this.saveY = this.$refs.scroll.getScrollY()
    // 取消全局监听事件
    this.$bus.$off("imageLoad", this.imageLoadFunc)
  },
  mounted() {
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // scroll组件传回position触发的事件
    contentScroll(position) {
      // 通过position的位置控制back-top图标的显示
      this.changeShowBackTop(position)
      // 通过position的位置控制tab-control吸顶效果
      this.isShowTabControl = (-position.y) > this.tabControlOffsetTop
    },
    // 上拉加载更多
    loadMore() {
      this.getGoodsData(this.currentType);
    },
    // swiper中图片加载后
    swiperImageLoad() {
      // 获取tab-control的offset
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
  /* padding-top: 44px; */
  /* 首页高度是视口高度，防止被内容撑开 */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  /* position: sticky; */
  /* top: 44px; */
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