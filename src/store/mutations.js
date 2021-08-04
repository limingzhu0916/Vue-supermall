import { ADDCOUNTER, ADDTOCART } from './mutation-types'

export default {
  [ADDCOUNTER](state, payload) {
    // 数量加一
    payload.count++
  },
  [ADDTOCART](state, payload) {
    // 点击将商品加入购物车时，为其添加一个选中的属性
    payload.checked = true
    state.cartList.push(payload)
  }
}