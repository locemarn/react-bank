import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestUtils from 'react-dom/test-utils';

import InputValue from './InputValue'

configure({
  adapter: new Adapter()
})

describe('<InputValue />', () => {
  it('should render input number', () => {
    const wrapper = shallow(<InputValue />)
    expect(wrapper).toBeTruthy()
  });

  it('has an input tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<InputValue />);    
    var input = ReactTestUtils.findRenderedDOMComponentWithTag(
     component, 'input'
   );
   
  });

  it('has a title class', () => {
    const component = ReactTestUtils.renderIntoDocument(<InputValue />);    
    var node = ReactTestUtils.findRenderedDOMComponentWithClass(
     component, 'autocomplete'
   );
  })

  var node = ReactTestUtils.findRenderedComponentWithType

});