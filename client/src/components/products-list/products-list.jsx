import React, { Component } from 'react';
import queryString from 'query-string';

import './products-list.css';
import ProductsListItem from './products-list-item/products-list-item';

class ProductsList extends Component {
	constructor(props){
    super(props);
    this.state={
      search: '',
      result: '' 
    }
  }

  componentWillMount(){
    let search = queryString.parse(this.props.location.search).search;
    this.setState({...this.state, search: search});
  }
  
  render() {
    return (
      <div className="container content-container products-list b-radius-xs bg-white">
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