<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="sells-info">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-info">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item">
        <table class="score-info">
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  display: flex;
  line-height: 45px;
  align-items: center;
}
.shop-top img {
  widows: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top .shop-name {
  margin-left: 10px;
}
.shop-middle {
  margin-top: 15px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
  color: #333;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count {
  font-size: 16px;
}
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  font-size: 12px;
  margin-top: 8px;
}
.score-info {
  width: 120px;
  font-size: 13px;
  margin-left: 30px;
}
.score-info td {
  padding: 3px 0;
}
.score-info .score {
  color: #5ea732;
  margin: 0 10px;
}
.score-info .score-better {
  color: #f13e3a;
}
.score-info .better span{
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.score-info .better-more span{
  background-color: #f13e3a;
}
.shop-bottom{
  text-align: center;
  margin-top: 10px;
}
.enter-shop{
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>