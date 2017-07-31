import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';



import Button from '../../ui-components/buttons/button/button'
import './product-detail-cta.css';

class ProductDetailCTA extends Component{

  getProductCondition(condition){
    switch(condition){
      case 'new':
        return "Novo"
      case 'used':
        return "Usado";
      default: 
        return "";
    }
  }

  itemPrice(product){
    var currency = "";
    var value = "-";
    if(product){
      let curr = product.price.currency;
      let amo = product.price.amount;
      if(curr != null){
        currency = getSymbolFromCurrency(curr)
      }
      if(amo != null){
        value = amo;
      }
    }
    return currency + " " + value;
  }
  itemPriceDec(product){
    var dec = "";
    if(product){
      dec = product.price.decimals;
      if(dec.length === 1)
        return dec + "0";
      else
        return dec;
    }
  }

  render(){
    return(
      <div className={"product-detail-cta " + this.props.className}>
        <p className="product-detail-info-text">
          <span className="product-detail-info-condition">{ this.getProductCondition(this.props.product.condition) }</span>
          <span className="product-detail-info-middot">&middot;</span>
          <span className="producti-detail-info-qtd-sold">{this.props.product ? this.props.product.sold_quantity : 0}</span> vendidos
        </p>
        <h1 className="product-detail-info-title">{this.props.product.title}</h1>
        <p className="product-detail-info-price">{this.itemPrice(this.props.product)}<span className="product-detail-info-price-cents">{this.itemPriceDec(this.props.product)}</span></p>
        <Button wrapperClasses="" classes="buy-button b-radius-xs btn-large btn-block" styleClass="primary" label="Comprar" />
      </div>
    )
  }
} 

export default ProductDetailCTA;