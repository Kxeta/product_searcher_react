import React, { Component } from 'react';

import './products-list.css';
import ProductsListItem from './products-list-item/products-list-item';

class ProductsList extends Component {
	constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container products-list b-radius-xs bg-white">
        <ul className="products-list-result list-unstyled">
          <li><a href="#" className="product-list-item-link"><ProductsListItem /></a></li>
          <li><a href="#" className="product-list-item-link"><ProductsListItem /></a></li>
          <li><a href="#" className="product-list-item-link"><ProductsListItem /></a></li>
          <li><a href="#" className="product-list-item-link"><ProductsListItem /></a></li>
          <li><a href="#" className="product-list-item-link"><ProductsListItem /></a></li>
        </ul>
      </div>
    );
  }
}

export default ProductsList;