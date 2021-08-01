<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    // 监听swiper中图片的加载
    imgLoad() {
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>