<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="detail-title">
      <div
        v-for="(item, index) in title"
        :key="index"
        class="detail-title-item"
        :class="{ active: currentIndex === index }"
        @click="titleItemClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    // 点击返回键返回上一页面
    backClick() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index
    }
  },
};
</script>

<style>
.back img {
  margin-top: 12px;
}
.detail-title {
  display: flex;
  font-size: 14px;
}
.detail-title-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
</style>