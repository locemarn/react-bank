import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import InputValue from './InputValue'
// import InputVal from './InputValue/InputValue'

configure({
  adapter: new Adapter()
})

describe('<InputValue />', () => {
  it('should render input number', () => {
    const wrapper = shallow(<InputValue />)
    expect(wrapper).toBeTruthy()
  });
});