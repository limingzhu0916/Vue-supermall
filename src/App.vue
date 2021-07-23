<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="./assets/img/tabbar/Home.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/Home_1.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="./assets/img/tabbar/category_1.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/category.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="./assets/img/tabbar/chart_1.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/chart.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="./assets/img/tabbar/my.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/my_1.svg" alt="" slot="item-icon-activate">
        <div slot="item-text">首页</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tabber/TabBer.vue'
import TabBarItem from './components/tabber/TabBarItem.vue'
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
