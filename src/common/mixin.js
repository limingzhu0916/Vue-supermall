import { debounce } from "common/util.js";
import BackTop from "components/content/backTop/BackTop.vue";

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

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    // 点击回到顶部
    backTopClick() {
      // 访问scroll组件中的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    changeShowBackTop(position) {
      // 通过position的位置控制back-top图标的显示
      this.isShowBackTop = -position.y > 1000;
    }
  },
}