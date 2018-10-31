import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestUtils from 'react-dom/test-utils'

import Form from './Form'

configure({
  adapter: new Adapter()
})

describe('<Form />', () => {
  it('renders an editor area', () => {
    const editor = shallow(<Form />)
    expect(editor.find('input').length).toEqual(3)
  });

  it('should be contain a form element', () => {
    const wrapper = ReactTestUtils.renderIntoDocument(<Form />)
    const node = ReactTestUtils.findRenderedDOMComponentWithClass(wrapper, 'form')
  });
})