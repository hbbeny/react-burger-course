import React from 'react'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop.js'
import Aux from '../../../hoc/Aux.js'
const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Closed]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer