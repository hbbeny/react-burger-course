import React, { Component } from 'react'
import Order from '../../components/Order/Order.js'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.js'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index.js'
import Spinner from '../../components/UI/Spinner/Spinner.js'
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount () {
    this.props.onFetchOrders(this.props.token, this.props.userId)
  }
  render () {
    let orders = <Spinner />

    if (!this.props.loading) {
      orders = (
        <div>
          {this.props.orders.map(order => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </div>
        // const ordersFiltered = this.props.orders.filter(
        //   order => order.userId === this.props.userId
        // )
        // orders = (
        //   <div>
        //     {ordersFiltered.map(order => (
        //       <Order
        //         key={order.id}
        //         ingredients={order.ingredients}
        //         price={order.price}
        //       />
        //     ))}
        //   </div>
      )
    }
    return <React.Fragment>{orders}</React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios))
