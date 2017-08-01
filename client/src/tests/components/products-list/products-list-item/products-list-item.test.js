import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import ProductsListItem from '../../../../components/products-list/products-list-item/products-list-item';

const productItem = {
  title: "Teste",
  picture: "https://media-cdn.tripadvisor.com/media/photo-s/01/3a/b3/2d/fernando-de-noronha.jpg",
  price:{
    currency: "BRL",
    amount: "1800",
    decimals: "97",
  },
  city: "Belo Horizonte"
};

describe('ProductsListItem', () => {
  it('renders without crashing', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem productItem={productItem}/>);
    expect(productsListItem).toBeTruthy();
  });
  
  it('renders rigth product image', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem productItem={productItem} />);
    var img = TestUtils.findRenderedDOMComponentWithClass(productsListItem, 'products-list-item-img');
    expect(img.getAttribute('src')).toEqual(productItem.picture);
  });
  
  it('renders rigth product alt image', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem productItem={productItem} />);
    var img = TestUtils.findRenderedDOMComponentWithClass(productsListItem, 'products-list-item-img');
    expect(img.getAttribute('alt')).toEqual(productItem.title);
  });
  
  it('renders rigth product title', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem productItem={productItem} />);
    var title = TestUtils.findRenderedDOMComponentWithClass(productsListItem, 'products-list-item-info-title');
    expect(title.textContent).toEqual(productItem.title);
  });
  
  it('renders rigth product price', () => {
    var productsListItem = TestUtils.renderIntoDocument(<ProductsListItem productItem={productItem} />);
    var price = TestUtils.findRenderedDOMComponentWithClass(productsListItem, 'products-list-item-info-price');
    expect(price.textContent).toContain(productItem.price.amount);
  });
  
});