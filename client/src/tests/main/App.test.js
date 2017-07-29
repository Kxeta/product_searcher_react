import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import App from '../../main/App';

describe('App', () => {
  it('renders without crashing', () => {
    var app = TestUtils.renderIntoDocument(<App />);
    expect(app).toBeTruthy();
  });
});
