<template>
  <div class="tabbar-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tabber-control-item"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
    itemClick(index) {
      this.currentIndex = index
      // 将点击index传给父级home
      this.$emit('tabClick', index)
    }
  },
};
</script>

<style>
.tabbar-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabber-control-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.active span{
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}
</style>