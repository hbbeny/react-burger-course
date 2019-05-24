import * as actionTypes from '../actions/actionTypes.js'
import { updateObject } from '../../shared/utility.js'

const inintialState = {
  orders: [],
  loading: false,
  purchased: false
}

const reducer = (state = inintialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return updateObject(state, { purchased: false })
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, { loading: true })
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return updateObject(state, {
        loading: false,
        orders: state.orders.concat(
          updateObject(action.orderData, { id: action.orderId })
        ),
        purchased: true
      })
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, { loading: false })

    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders, loading: false })

    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false })

    default:
      return state
  }
}

export default reducer
