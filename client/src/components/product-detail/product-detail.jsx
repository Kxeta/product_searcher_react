import React, { Component } from 'react';
import request from 'request';
import { ReactImageMagnifyTouch } from 'react-image-magnify';
import $ from 'jquery';

import ProductDetailCTA from './product-detail-cta/product-detail-cta'
import './product-detail.css';

class ProductDetail extends Component {
	constructor(props){
    super(props);
    this.state={
      id: '',
      product: '',
      no_results: false,
      error: false
    }
  }


  handleScroll(event){

  }

  componentDidMount(){
  }

  componentWillMount(){
    let id = this.props.id ? this.props.id : this.props.match.params.id;
    this.setState({...this.state, id: id},() => {
      request('http://localhost:3000/api/items/' + this.state.id, function(error, response, body) {
          if(typeof body !== 'undefined'){
            var result = JSON.parse(body);
            if(result.item != null){
              this.setState({...this.state, product: result.item});
            }
            else
              this.setState({...this.state, no_results: true});
          }
          else{
              this.setState({...this.state, no_results: true});
          }
          if(error){
            this.setState({...this.state, error: true});
          }
        }.bind(this));
    });
  }
  
  render() {
    return (
      <div className="product-detail container content-container b-radius-xs p-v-md bg-white">
        { this.state.error ? ( <div className="col-xs-12"><h2 className="text-center error-msg p-a-sm">Ops... Algo não deu certo...<br/> Tente pesquisar novamente mais tarde. </h2></div>) : '' }
        { !this.state.error && this.state.no_results ? ( <div className="col-xs-12"><h2 className="text-center p-a-sm">Ops... Não encontramos este produto...<br/> Tente fazer uma pesquisa. </h2></div>) : 
        ( <div className="product-detail-wrapper">
            <div className="product-detail-selling row">
              <div className="product-detail-img-wrapper p-h-sm col-xs-12 col-sm-8">
                <ReactImageMagnifyTouch {...{
                    smallImage: {
                        alt: this.state.product ? this.state.product.title : '',
                        src: this.state.product ? this.state.product.picture : '',
                        isFluidWidth: true,
                    },
                    largeImage: {
                        alt: this.state.product ? this.state.product.title : '',
                        src: this.state.product ? this.state.product.picture : 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
                        width: this.state.product ? this.state.product.picture_details.max_size.split('x')[0] : 640,
                        height: this.state.product ? this.state.product.picture_details.max_size.split('x')[1] : 480
                    },
                    className: "product-detail-img img img-responsive",
                    style: { maxWidth : this.state.product ? this.state.product.picture_details.size.split('x')[0] + 'px' : "100%"}
                }} />
              </div>
              <div className="product-detail-info-wrapper p-h-sm col-xs-12 col-sm-4">
                <ProductDetailCTA className="desktop-fixed-cta" product={this.state.product} />
              </div>
            </div>
            <div className="product-detail-description-wrapper row">
              <div className="product-detail-description col-xs-12 col-sm-8">
                <h2>Descrição do produto</h2>
                <div className="product-detail-description-text" dangerouslySetInnerHTML={{__html: this.state.product.description}}>
                </div>
              </div>
            </div>
            <div className="product-detail-info-wrapper p-h-sm col-xs-12 hidden-sm hidden-md hidden-lg">
              <ProductDetailCTA product={this.state.product} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetail;