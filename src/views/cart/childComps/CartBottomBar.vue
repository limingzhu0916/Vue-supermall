<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <check-button
        class="check-button"
        :isChecked="isSelectAll"
        @click.native="selectAllClick"
      />
      <span>全选</span>
    </div>
    <div class="bottom-bar-center">合计：{{ totalPrice }}</div>
    <div class="bottom-bar-right" @click="barRightClick">去结算({{ checkItemLength }})</div>
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
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkItemLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    // 购物车全选按钮功能
    isSelectAll() {
      // 如果购物车没有商品
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    // 全选按钮点击事件
    selectAllClick() {
      // 如果全部选中,点击按钮取消全选
      if(this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      }else{
        // 如果部分或全部没选中，点击全选
        this.cartList.forEach(item => item.checked = true)
      }
    },
    // 如果没有选中任何商品，点击结算按钮弹出toast
    barRightClick() {
      if(!this.checkItemLength){
        this.$toast.show("请选择购买的商品")
      }
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
.bottom-bar-center {
  flex: 1;
}
.bottom-bar-right {
  width: 90px;
  background-color: var(--color-high-text);
  text-align: center;
}
</style>