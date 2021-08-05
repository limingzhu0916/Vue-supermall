<template>
  <div class="profile-top-bar">
    <div class="bar-left">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="bar-center">
      <span class="login">登录</span>
      <span class="sign-in">/注册</span>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="bar-right">
      <img src="~assets/img/profile/right_arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-top-bar{
  height: 60px;
  background-color: var(--color-tint);
  display: flex;
  color: #fff;
}
.bar-left{
  width: 70px;
}
.bar-left img{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 0 10px;
}
.bar-center{
  flex: 1;
  padding-top: 3px;
}
.bar-center .login{
  margin-left: 5px;
}
.bar-center .phone img{
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
}
.bar-center .phone span{
  font-size: 13px;
}
.bar-right{
  width: 30px;
  line-height: 60px;
}
.bar-right img{
  width: 20px;
  height: 20px;
}
</style>