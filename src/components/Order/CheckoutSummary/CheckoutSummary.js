import React from 'react'

import Burger from '../../Burger/Burger.js'
import Button from '../../UI/Button/Button.js'

import classes from './CheckoutSummary.css'

const checkoutSummary = props => {
  return (
    <React.Fragment>
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Burger ingredients={props.ingredients} />
          <Button btnType='Danger' clicked={props.checkoutCancelled}>
            Cancel
          </Button>
          <Button btnType='Success' clicked={props.checkoutContinued}>
            Continue
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default checkoutSummary
