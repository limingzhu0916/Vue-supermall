<template>
  <div class="profile-cart">
    <div class="my-cart">
      <img src="~assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="download-shopping">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-cart{
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}
.profile-cart img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.my-cart,
.download-shopping{
  flex: 1;
  /* 垂直对齐 */
  display: flex;
  align-items: center;
}
.my-cart{
  border-bottom: 1px solid #ccc;
}
</style>