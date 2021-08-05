<template>
  <div class="profile-info">
    <div class="left-info">
      <span class="money">{{getMoney}}</span>
      <span>元</span>
      <div>我的余额</div>
    </div>
    <div class="center-info">
      <span class="discount">{{discount}}</span>
      <span>个</span>
      <div>我的优惠</div>
    </div>
    <div class="right-info">
      <span class="integral">{{integral}}</span>
      <span>分</span>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 0,
      discount: 0,
      integral: 0
    }
  },
  computed: {
    getMoney() {
      return this.money.toFixed(2)
    }
  }
}
</script>

<style>
.profile-info{
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 10px solid #f2f5f8;
  font-size: 13px;
}
.left-info{
  flex: 1;
}
.center-info{
  flex: 1;
  border-left: 1px solid #f2f5f8;
  border-right: 1px solid #f2f5f8;
}
.right-info{
  flex: 1;
}
.money,
.discount,
.integral{
  font-size: 20px;
  color: rgba(255, 68, 0, 0.836);
  font-weight: 700;
}
</style>