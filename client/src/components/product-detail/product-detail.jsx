import React, { Component } from 'react';
import { ReactImageMagnifyTouch } from 'react-image-magnify';


import Button from '../ui-components/buttons/button/button'
import './product-detail.css';

class ProductDetail extends Component {
	constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="product-detail container content-container b-radius-xs p-v-md bg-white">
        <div className="product-detail-selling row">
          <div className="product-detail-img-wrapper p-h-sm col-xs-12 col-sm-8">
            <ReactImageMagnifyTouch {...{
                smallImage: {
                    alt: 'Titulo da Imagem',
                    isFluidWidth: true,
                    src: "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
                },
                largeImage: {
                    alt: 'Titulo da Imagem',
                    src: "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
                    width: 1600,
                    height: 900
                },
                className: "product-detail-img img img-responsive"
            }} />
          </div>
          <div className="product-detail-info-wrapper p-h-sm col-xs-12 col-sm-4">
            <p className="product-detail-info-text">
              <span className="product-detail-info-condition">Novo</span>
              <span className="product-detail-info-middot">&middot;</span>
              <span className="producti-detail-info-qtd-sold">255</span> vendidos
            </p>
            <h1 className="product-detail-info-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, consequatur.</h1>
            <p className="product-detail-info-price">R$ 1.982 <span className="product-detail-info-price-cents">00</span></p>
            <Button wrapperClasses="" classes="buy-button b-radius-xs btn-large btn-block" styleClass="primary" label="Comprar" />
          </div>
        </div>
        <div className="product-detail-description-wrapper row">
          <div className="product-detail-description col-xs-12 col-sm-8">
            <h2>Descrição do produto</h2>
            <p className="product-detail-description-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam asperiores atque distinctio natus vero temporibus perspiciatis recusandae sunt, alias sint similique itaque porro a nemo error praesentium cum, nulla suscipit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;