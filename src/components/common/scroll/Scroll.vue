<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    // 是否实时监控滑动位置
    probeType: {
      type: Number,
      default: 0
    },
    // 是否加载更多
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    }),
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)
    }),
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
}
</script>

<style>

</style>