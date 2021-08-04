<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      ref="navBar"
      @titleItemClick="titleItemClick"
    />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="detailScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imagesLoad" />
      <detail-params ref="params" :goodsParam="goodsParam" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goodList="recommendInfo" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
    <deatil-bottom-bar @cartClick="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DeatilBottomBar from "./childComps/DeatilBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommendData,
} from "network/detail.js";
import { itemListenerMixin, backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DeatilBottomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendInfo: [],
      // 纪录模块的位置
      navBarTitleTopY: [],
      currentIndex: 0,
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDetailData(this.iid).then((res) => {
      const result = res.result;
      this.topImages = result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(result.shopInfo);
      // 保存详情页数据
      this.detailInfo = result.detailInfo;
      // 获取参数信息
      this.goodsParam = new GoodsParam(
        result.itemParams.info,
        result.itemParams.rule
      );
      // 保存评论信息
      if (result.rate.cRate !== 0) {
        this.commentInfo = result.rate.list[0];
      }
    });
    // 获取推荐数据
    getRecommendData().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  mounted() {},
  destroyed() {
    // 切换其他页面时，取消对全局事件的监听
    this.$bus.$off("imageLoad", this.imageLoadFunc);
  },
  methods: {
    imagesLoad() {
      // 重新刷新better-scroll,只会在图片都加载完成后调用一次
      this.$refs.scroll.refresh();
      // 将个模块的高度放入数组
      this.navBarTitleTopY.push(0);
      this.navBarTitleTopY.push(this.$refs.params.$el.offsetTop - 44);
      this.navBarTitleTopY.push(this.$refs.comment.$el.offsetTop - 44);
      this.navBarTitleTopY.push(this.$refs.recommend.$el.offsetTop - 44);
      // 数组后放入一个无穷大
      this.navBarTitleTopY.push(Infinity);
    },
    // 点击detail-nav-bar上的title跳转到对应位置
    titleItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navBarTitleTopY[index], 100);
    },
    // 监听滑动位置
    detailScroll(position) {
      // 滑到对应主题，对应navBar的title发生改变
      const positionY = -position.y;
      for (let i = 0; i < this.navBarTitleTopY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          this.navBarTitleTopY[i] <= positionY &&
          positionY < this.navBarTitleTopY[i + 1]
        ) {
          // 避免重复进入
          this.currentIndex = i;
          // 切换title
          this.$refs.navBar.currentIndex = i;
        }
      }
      // 通过position的位置控制back-top图标的显示
      this.changeShowBackTop(position)
    },
    // 点击加入购物车
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 向Vuex中提交事件
      this.$store.dispatch("addCart", product).then(res => {
        // toast组件已经挂载到Vue原型上，可以直接使用内部方法show
        // this.$toast.show(res, 2000)
        this.$toast.show(res)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.detail-nav-bar {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>