<template>
  <tab-bar>
      <tab-bar-item path="/home" iconColor="red">
        <img src="~assets/img/tabbar/Home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/Home_1.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" iconColor="blue">
        <img src="~assets/img/tabbar/category_1.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/chart_1.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/chart.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/my.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/my_1.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabber/TabBar.vue'
import TabBarItem from './tabber/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>