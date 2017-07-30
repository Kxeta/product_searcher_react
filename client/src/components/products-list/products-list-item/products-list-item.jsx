import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import Image from '../../ui-components/image/image'; 
import './products-list-item.css';

class ProductsListItem extends Component {
	constructor(props){
    super(props);
  }

  itemPrice(curr, val){
    var currency = "";
    var value = "-";
    if(curr){
      currency = getSymbolFromCurrency(curr)
    }
    if(val){
      value = parseFloat(val).toFixed(2);
    }
    return currency + " " + value;
  }
  
  render() {
    return (
      <div className="products-list-item">
        <div className="products-list-item-img-wrapper p-h-sm">
          <Image src={ this.props.productItem.thumbnail } alt={ this.props.productItem.title } styleClass="products-list-item-img"/>
        </div>
        <div className="products-list-item-info-wrapper p-h-sm">
          <p className="products-list-item-info-price">{ this.itemPrice( this.props.productItem.currency_id, this.props.productItem.price ) }</p>
          <h2 className="products-list-item-info-title">{ this.props.productItem.title }</h2>
        </div>
        <div className="products-list-item-city-wrapper p-h-sm">
          <p className="products-list-item-city">{ this.props.productItem.address.city_name }</p>
        </div>
      </div>
    );
  }
}

export default ProductsListItem;