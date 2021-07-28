<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActivate"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-activate"></slot></div>
    <div :style="getColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  computed: {
    isActivate() {
      return this.$route.path === this.path
    },
    // 父组件中传入iconColor可以修改默认字体颜色
    getColor() {
      return this.isActivate ? {color: this.iconColor} : {}
    }
  },
  props: {
    path: String,
    iconColor: {
      type: String,
      default: "#ff5777"
    }
  },
  methods: {
   itemClick() {
     return this.$router.replace(this.path)
   }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #6E6E6E;
}
.tab-bar-item img{
  width: 30px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>