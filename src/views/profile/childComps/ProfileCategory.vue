<template>
  <div class="profile-cate">
    <div class="my-message">
      <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="my-pointer">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="my-vip-card">
      <img src="~assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-cate{
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  border-bottom: 10px solid #f2f5f8;
}
.profile-cate img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.my-message,
.my-pointer,
.my-vip-card{
  flex: 1;
  /* 垂直对齐 */
  display: flex;
  align-items: center;
}
.my-pointer{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>