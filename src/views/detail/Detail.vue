<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imagesLoad" />
      <detail-params :goodsParam="goodsParam" />
      <detail-comment-info :commentInfo="commentInfo" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetailData, Goods, Shop, GoodsParam } from "network/detail.js";
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
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {}
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 根据iid请求数据
    getDetailData(this.iid).then((res) => {
      const result = res.result;
      console.log(result);
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
      this.goodsParam = new GoodsParam(result.itemParams.info, result.itemParams.rule)
      // 保存评论信息
      if(result.rate.cRate !== 0){
        this.commentInfo = result.rate.list[0]
      }
    });
  },
  methods: {
    imagesLoad() {
      // 重新刷新better-scroll
      this.$refs.scroll.refresh();
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
  height: calc(100% - 44px);
}
</style>