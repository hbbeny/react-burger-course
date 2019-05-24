import React from 'react'
import { BurgerBuilder } from './BurgerBuilder.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<BurgerBuilder />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />)
  })

  it('should render <BuilControls /> when reciving ingredients', () => {
    wrapper.setProps({ ings: { salad: 0 } })
    expect(wrapper.find(BuildControls)).toHaveLength(1)
  })
})
