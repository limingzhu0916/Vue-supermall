<template>
  <div id="left-bar">
    <div
      class="left-bar-item"
      v-for="(item, index) in categoryList"
      :key="index"
      @click="barItemClick(index)"
      :class="{ ative: currentIndex === index }"
    >
      <div class="patch" v-show="currentIndex === index"></div>
      <span class="item-title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    barItemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
#left-bar {
  width: 100px;
  background-color: #f6f6f6;
}
.left-bar-item {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.left-bar-item span{
  /* width: 85px; */
  flex: 1;
  text-align: center;
}
.ative .item-title{
  font-weight: 600;
  background-color: #fff;
  color: var(--color-high-text);
}
.patch{
  width: 4px;
  height: 40px;
  background-color: var(--color-high-text);
}
</style>