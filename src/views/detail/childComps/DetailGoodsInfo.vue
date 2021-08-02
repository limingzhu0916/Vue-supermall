<template>
  <div id="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-goods-desc">
      <div style="float: left;" class="desc-line">
        <i class="desc-dot"></i>
      </div>
      <div class="desc-text">{{ detailInfo.desc }}</div>
      <div style="float: right;" class="desc-line">
        <i style="right: 0px" class="desc-dot"></i>
      </div>
    </div>
    <div class="goods-info-key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="goods-info-imgs">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 判断,所有的图片都加载完成了.那么进行一次回调
      if(++this.count === this.imgLength){
        this.$emit("imgLoad")
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
#detail-goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.detail-goods-desc{
  font-size: 14px;
  padding: 0 10px;
}
.desc-line{
  position: relative;
  width: 100px;
  height: 1px;
  background-color: gray;
}
.desc-dot{
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: black;
  top: -5px;
}
.desc-text{
  padding: 10px 0;
  color: gray;
}
.goods-info-key{
  padding: 8px 10px;
  font-size: 15px;
}
.goods-info-imgs img{
  width: 100%;
}
</style>