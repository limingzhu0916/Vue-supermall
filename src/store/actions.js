export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找数组中是否存在该商品，不存在返回undefined
      const currentProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (currentProduct) {
        context.commit("addCounter", currentProduct)
        resolve("商品数量+1")
      } else {
        // 不存在添加count属性
        payload.count = 1
        context.commit("addToCart", payload)
        resolve("添加了新商品")
      }
    })
  }
}