<template>
  <div id="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          class="indi-item"
          v-for="(item, index) in slideCount"
          :class="{ active: index === currentIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 图片滚动的间隔时间
    interval: {
      type: Number,
      default: 3000,
    },
    // 滚动一张图片所需时间
    animDuration: {
      type: Number,
      default: 300,
    },
    // 设置触摸滑动图片的比例
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    // 是否显示小圆标
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, // 元素个数
      currentIndex: 1, // 当前的index
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      scrolling: false, // 是否正在滚动
    };
  },
  mounted() {
    // 该定时器的事件从300改为500后，可以解决刷新后，小圆标不出现，轮播图不播放的情况
    setTimeout(() => {
      // 1.操作DOM, 在前后添加Slide
      this.handleDom();
      // 2、开启定时器
      this.startTimer();
    }, 500);
  },
  methods: {
    /* 
      定时器操作
    */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        //  定时切换到下一张
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    /* 
    滚动到正确位置
   */
    scrollContent(currentPosition) {
      //  设置正在滚动
      this.scrolling = true;
      // 开始滚动
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);
      // 判断滚动到的位置
      this.checkPosition();
      // 设置滚动完成
      this.scrolling = false;
    },

    /* 
    检查当前滚动到的位置
   */
    checkPosition() {
      //  等待图片滚动完毕
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          //  当滚动到最后一张图片
          this.currentIndex = 1;
          //  立即移动到正确位置
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }

        //  结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    /* 
      操作DOM，在前后各添加一个slide，方便跳转
    */
    handleDom() {
      // 获取要操作的元素
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = swiperEl.getElementsByClassName("slide");
      // slide的个数
      this.slideCount = slidesEls.length;
      // 如果slide的数量大于1, 则前后分别加一个slide
      if (this.slideCount > 1) {
        // 克隆第一张和最后一张slides，并将第一张放到最后，最后一张放到第一
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      // 让swiper展示第一张slide（目前被放在最后一个）
      this.setTransform(-this.totalWidth);
    },

    /* 
      设置滚动的位置
    */
    setTransform: function (position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },

    /* 
      拖动事件的处理
    */
    touchStart(e) {
      //  如果正在滚动，不可以拖动
      if (this.scrolling) return;
      // 拖动过程中，不需要滚动
      this.stopTimer();
      // 保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    touchMove(e) {
      //  计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      // 设置当前的位置
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      //  获取移动的距离
      let currentMove = Math.abs(this.distance);

      if (this.distance === 0) {
        return;
        // 根据移动位置，移动图片，保证用户只拖动一点，即可滑动到下一张
      } else if (
        this.distance > 0 && currentMove > this.totalWidth * this.moveRatio
      ) {
        // 向右移动超过图片尺寸的0.25
        this.currentIndex--;
      } else if (
        this.distance < 0 && currentMove > this.totalWidth * this.moveRatio
      ) {
        // 向左移动超过图片尺寸的0.25
        this.currentIndex++;
      }
      // 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 移动完成打开定时器
      this.startTimer();
    },
  },
};
</script>

<style>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 8px;
}
.indi-item {
  /* box-sizing: border-box; */
  width: 8px;
  height: 8px;
  border-radius: 4px;
  /* line-height: 8px; */
  background-color: #fff;
  /* text-align: center; */
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
