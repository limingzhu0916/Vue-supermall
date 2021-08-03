<template>
  <div id="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <span class="comment-name">用户评价</span>
      <img
        class="comment-icon"
        src="~assets/img/detail/right_arrow.svg"
        alt=""
      />
      <span class="comment-more">更多</span>
    </div>
    <div class="comment-info">
      <div class="user-info">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="comment-content">
        <div class="content">{{ commentInfo.content }}</div>
        <p class="content-info">
          {{ commentInfo.created | dateShow }}
          {{ commentInfo.style }}
        </p>
      </div>
    </div>
    <div class="comment-img" v-if="commentInfo.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
    <div class="shop_reply" v-if="commentInfo.explain != null">
      {{ commentInfo.explain }}
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/util.js";
export default {
  props: {
    commentInfo: {
      type: Object,
      default: {},
    },
  },
  filters: {
    dateShow(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style scoped>
#detail-comment {
  background-color: #fff;
  font-size: 15px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.comment-title {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.comment-more {
  float: right;
}
.comment-icon {
  float: right;
  position: relative;
  top: 3px;
  width: 16px;
  height: 16px;
}
.user-info {
  padding: 10px 0;
  /* 辅轴居中对齐 */
  display: flex;
  align-items: center;
}
.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px rgba(128, 128, 128, 0.2);
}
.user-info span {
  margin-left: 10px;
}
.comment-content {
  font-size: 12px;
  color: #666;
}
.content-info {
  color: #999;
  padding: 8px 0;
}
.shop_reply {
  border-top: 1px solid rgba(128, 128, 128, 0.4);
  padding: 5px 0;
  color: gray;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comment-img img {
  margin-right: 5px;
  width: 60px;
  height: 60px;
}
</style>