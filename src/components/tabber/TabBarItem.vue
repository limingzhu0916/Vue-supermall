<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActivate"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-activate"></slot></div>
    <div :class="{activate: isActivate}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActivate: false
    }
  },
  props: {
    path: String
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
.activate{
  color: #1C1C1C;
}
</style>