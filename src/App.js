import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index.js'
import asyncComponent from './hoc/asyncComponent/asyncComponent.js'

const asyncChechout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout.js')
})
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders.js')
})
const asyncLogout = asyncComponent(() => {
  return import('./containers/Auth/Logout/Logout.js')
})
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth.js')
})

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup()
  }
  render () {
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={asyncChechout} />
          <Route path='/orders' component={asyncOrders} />
          <Route path='/logout' component={asyncLogout} />
          <Route path='/auth' component={asyncAuth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
      )
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
