<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title-info">{{ goods.title }}</div>
    <div class="price-info">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="other-info">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="service-info">
      <span
        v-for="index in (goods.services.length - 1)"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title-info {
  color: #222;
}
.price-info {
  margin-top: 10px;
}
.price-info .n-price {
  font-size: 18px;
  color: var(--color-high-text);
}
.price-info .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.price-info .discount {
  margin-left: 5px;
  color: #fff;
  background-color: var(--color-high-text);
  font-size: 12px;
  border-radius: 5px;
  padding: 3px 3px;

  position: relative;
  top: -8px;
}
.other-info {
  margin-top: 15px;
  font-size: 12px;
  display: flex;
  line-height: 30px;
  border-bottom: solid 1px rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.service-info {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
.service-info img {
  widows: 13px;
  height: 13px;
  position: relative;
  top: 2px;
}
.service-info span {
  font-size: 12px;
  color: #222;
}
</style>