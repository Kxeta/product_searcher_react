import React, { Component } from 'react';

import './products-list-item.css';

class ProductsListItem extends Component {
	constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="products-list-item">
        <div className="products-list-item-img-wrapper p-h-sm">
          <img src="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg" alt="Titulo da ibagem" className="products-list-item-img img img-responsive"/>
        </div>
        <div className="products-list-item-info-wrapper p-h-sm">
          <p className="products-list-item-info-price">R$ 1982</p>
          <h2 className="products-list-item-info-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, consequatur.</h2>
        </div>
        <div className="products-list-item-city-wrapper p-h-sm">
          <p className="products-list-item-city">Belo Horizonte</p>
        </div>
      </div>
    );
  }
}

export default ProductsListItem;