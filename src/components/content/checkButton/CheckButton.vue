<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return true
      }
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: relative;
}
.check-button img{
  width: 13px;
  height: 13px;
  position: absolute;
  bottom: 1px;
}
.check{
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>