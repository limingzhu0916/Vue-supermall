<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <check-button class="check-button" />
      <span>全选</span>
    </div>
    <div class="bottom-bar-center">合计：{{ totalPrice }}</div>
    <div class="bottom-bar-right">去结算({{checkItemLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => item.checked).reduce((preValue, item) =>{
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkItemLength() {
      return this.cartList.filter(item => item.checked).length
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
}
.bottom-bar-left {
  align-self: center;

  display: flex;
  align-items: center;

  width: 80px;
}
.check-button {
  margin-left: 4px;
  margin-right: 10px;
}
.bottom-bar-center{
  flex: 1;
}
.bottom-bar-right{
  width: 90px;
  background-color: var(--color-high-text);
  text-align: center;
}
</style>