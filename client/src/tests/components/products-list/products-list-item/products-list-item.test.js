import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import ProductsListItem from '../../../../components/products-list/products-list-item/products-list-item';

describe('ProductsListItem', () => {
  it('renders without crashing', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem />);
    expect(productsListItem).toBeTruthy();
  });
});
