<template>
  <div class="goods-list-item">
    <img :src="getImgSrc" alt="" @load="imageLoad" @click="goodsImageClick"/>
    <div class="goods-info">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span>
      <span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getImgSrc() {
      return this.goodsListItem.image || this.goodsListItem.show.img
    }
  },
  methods: {
    // 监听图片加载完成,并向事件总线发送事件
    imageLoad() {
      this.$bus.$emit('imageLoad')
      /* if(this.$route.path.indexof('/home')){
        this.$bus.$emit('homeImageLoad')
      }else if(this.$route.path.indexof('/detail')){
        this.$bus.$emit('detailImageLoad')
      } */
    },
    goodsImageClick() {
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  },
};
</script>

<style>
.goods-list-item {
  padding-bottom: 40px;
  width: 48%;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  height: 97%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>