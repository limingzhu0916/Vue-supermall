import { ADDCOUNTER, ADDTOCART } from './mutation-types'

export default {
  [ADDCOUNTER](state, payload) {
    // 数量加一
    payload.count++
  },
  [ADDTOCART](state, payload) {
    state.cartList.push(payload)
  }
}