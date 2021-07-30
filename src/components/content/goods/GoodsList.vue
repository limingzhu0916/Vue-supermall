<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodList" :goodsListItem="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  props: {
    goodList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
};
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>