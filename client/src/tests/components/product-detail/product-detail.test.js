import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import ProductDetail from '../../../components/product-detail/product-detail';

describe('ProductDetail', () => {
  it('renders without crashing', () => {
    var productDetail = TestUtils.renderIntoDocument(<ProductDetail id="MLA648187749"/>);
    expect(productDetail).toBeTruthy();
  });
});
