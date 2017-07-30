import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import Button from '../../../../../components/ui-components/buttons/button/button'

describe('Button', () => {
  it('renders without crashing', () => {
    var _button = TestUtils.renderIntoDocument(<Button styleClass="primary" icon="globe"/>);
    expect(_button).toBeTruthy();
  });

  it('sets button style correctly', () => {
    var _button = TestUtils.renderIntoDocument(<Button styleClass="primary" />);
    var btn = TestUtils.findRenderedDOMComponentWithClass(_button, 'btn-primary');
    expect(btn).toBeTruthy();
  });
  it('sets label correctly', () => {
    var _button = TestUtils.renderIntoDocument(<Button label="Teste" />);
    var btn = TestUtils.findRenderedDOMComponentWithTag(_button, "button");
    expect(btn.textContent).toEqual("Teste");
  });
});