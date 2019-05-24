import React, { Component } from 'react'
import Aux from '..//Aux.js'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.js'
import { connect } from 'react-redux'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  siddeDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render () {
    return (
      <Aux>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.siddeDrawerClosedHandler}
        />
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToogleClicked={this.sideDrawerToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)
