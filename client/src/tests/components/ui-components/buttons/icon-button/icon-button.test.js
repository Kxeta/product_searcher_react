import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import IconButton from '../../../../../components/ui-components/buttons/icon-button/icon-button'

describe('iconButton', () => {
  it('renders without crashing', () => {
    var iconButton = TestUtils.renderIntoDocument(<IconButton styleClass="primary" icon="globe"/>);
    expect(iconButton).toBeTruthy();
  });
  it('sets button style correctly', () => {
    var iconButton = TestUtils.renderIntoDocument(<IconButton styleClass="primary" />);
    var btn = TestUtils.findRenderedDOMComponentWithClass(iconButton, 'btn-primary');
    expect(btn).toBeTruthy();
  });
  it('sets icon type correctly', () => {
    var iconButton = TestUtils.renderIntoDocument(<IconButton icon="globe" />);
    var icon = TestUtils.findRenderedDOMComponentWithTag(iconButton, 'i');
    expect(new RegExp('(\\s|^)fa-globe(\\s|$)').test(icon.className)).toBeTruthy();
  });
});