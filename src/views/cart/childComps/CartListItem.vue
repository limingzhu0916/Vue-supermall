<template>
  <div id="cart-list-item">
    <div class="item-selector">
      <check-button :isChecked="itemInfo.checked" @click.native="checkButtonClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ itemInfo.price }}</div>
        <div class="item-count">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  components: {
    CheckButton,
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkButtonClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  },
};
</script>

<style scoped>
#cart-list-item {
  width: 100%;
  display: flex;
  padding: 4px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-img {
  padding: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  overflow: hidden;
  padding: 5px 10px;
  position: relative;
}
.item-title,
.item-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: rgb(253, 105, 6);
  float: left;
}
.info-bottom .item-count {
  float: right;
}
</style>