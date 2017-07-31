import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import Image from '../../ui-components/image/image'; 
import './products-list-item.css';

class ProductsListItem extends Component {

  itemPrice(curr, amo, dec){
    var currency = "";
    var value = "-";
    if(curr != null){
      currency = getSymbolFromCurrency(curr)
    }
    if(amo != null){
      value = parseFloat(amo + "." + dec).toFixed(2);
    }
    return currency + " " + value;
  }
  
  render() {
    return (
      <div className="products-list-item">
        <div className="products-list-item-img-wrapper p-h-sm">
          <Image src={ this.props.productItem.picture } alt={ this.props.productItem.title } styleClass="products-list-item-img"/>
        </div>
        <div className="products-list-item-info-wrapper p-h-sm">
          <p className="products-list-item-info-price">{ this.itemPrice( this.props.productItem.price.currency, this.props.productItem.price.amount, this.props.productItem.price.decimals  ) }</p>
          <h2 className="products-list-item-info-title">{ this.props.productItem.title }</h2>
        </div>
        <div className="products-list-item-city-wrapper p-h-sm">
          <p className="products-list-item-city">{ this.props.productItem.city }</p>
        </div>
      </div>
    );
  }
}

export default ProductsListItem;