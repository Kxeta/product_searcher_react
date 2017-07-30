import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import ProductsList from '../../../components/products-list/products-list';

describe('ProductsList', () => {
  it('renders without crashing', () => {
    var productsList = TestUtils.renderIntoDocument(<ProductsList search="anything"/>);
    expect(productsList).toBeTruthy();
  });
});
