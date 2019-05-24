import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.js'
import ContactData from './ContactData/ContactData.js'
import { connect } from 'react-redux'

class Checkout extends Component {
  checkoutCancelledHander = () => {
    this.props.history.goBack()
  }
  checkoutContinuedHander = () => {
    this.props.history.replace('/checkout/contact-data')
  }
  render () {
    let sumary = <Redirect to='/' />
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to='/' />
      ) : null

      sumary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHander}
            checkoutContinued={this.checkoutContinuedHander}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      )
    }
    return sumary
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps)(Checkout)
