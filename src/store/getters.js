export default {
  // 获取购物车商品种类数量
  cartListLength(state) {
    return state.cartList.length
  },
  // 获取购物车商品
  cartList(state){
    return state.cartList
  }
}