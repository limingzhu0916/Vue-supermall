import { debounce } from "common/util.js";

export const itemListenerMixin = {
  data() {
    return {
      imageLoadFunc: null
    }
  },
  mounted() {
    // 监听事件总线上的imageLoad事件
    const refresh = debounce(this.$refs.scroll.refresh, 30);
    this.imageLoadFunc = () => {
      // 调用scroll组件中的refresh方法,使用防抖函数避免refresh执行多次
      refresh();
    }
    this.$bus.$on("imageLoad", this.imageLoadFunc);
  },
}