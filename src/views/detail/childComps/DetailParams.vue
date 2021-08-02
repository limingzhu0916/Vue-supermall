<template>
  <div id="detail-params" v-if="Object.keys(goodsParam).length !== 0">
    <table class="params-size">
      <tr v-for="(item, index) in goodsParam.sizes[0]" :key="index">
        <th>{{ item[0] }}</th>
        <td v-for="tdItem in item.length - 1" :key="tdItem">
          {{ item[tdItem] }}
        </td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(item, index) in goodsParam.infos" :key="index">
        <th>
          {{ item.key }}
        </th>
        <td>
          {{ item.value }}
        </td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image !== ''">
      <img :src="goodsParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#detail-params {
  background-color: #fff;
  font-size: 13px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.params-size,
.params-info {
  border-collapse: collapse;
  width: 100%;
}
.params-size tr,
.params-info tr {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  height: 40px;
}
.params-size td {
  padding-left: 15px;
}
.params-info th,
.params-size th {
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
}
.params-info td {
  padding-left: 30px;
  color: var(--color-high-text);
}
.info-img img {
  width: 100%;
}
</style>