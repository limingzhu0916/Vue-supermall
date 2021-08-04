<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <keep-alive>
      <cart-list />
    </keep-alive>
    <!-- 底部结算 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from './childComps/CartBottomBar.vue';

import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 将vuex中的getters混入计算属性
    ...mapGetters(["cartListLength"]),
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
</style>