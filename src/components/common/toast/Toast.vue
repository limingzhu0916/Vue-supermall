<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '显示',
      isShow: false
    }
  },
  methods: {
    // 控制toast显示，和显示的内容
    show(message, duration=2000) {
      this.message = message
      this.isShow = true
      
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  },
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px 10px;
  z-index: 999;
}
</style>