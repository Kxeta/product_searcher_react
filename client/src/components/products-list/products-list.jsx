import React, { Component } from 'react';
import queryString from 'query-string';
import request from 'request';
import $ from 'jquery';

import './products-list.css';
import ProductsListItem from './products-list-item/products-list-item';

class ProductsList extends Component {
	constructor(props){
    super(props);
    this.state={
      search: '',
      result: '',
      no_results: false,
      error: false
    }
  }

  componentDidMount() {
    let search = this.props.search ? this.props.search : queryString.parse(this.props.location.search).search;
    this.setState({...this.state, search: search}, ()=>{
        request('http://localhost:3000/api/items?q=' + encodeURIComponent(this.state.search), function(error, response, body) {
          if(typeof body != 'undefined'){
            var result = JSON.parse(body);
            if(result.data.length){
              this.setState({...this.state, result: result.data});
              this.setState({...this.state, no_results: false});
            }
            else
              this.setState({...this.state, no_results: true});
          }
          else{
              this.setState({...this.state, no_results: true});
          }
          if(error){
            console.log(error);
            this.setState({...this.state, error: true});
          }
        }.bind(this));
    });
  }

  
  
  render() {
    var productsListItems = $.map(this.state.result, 
                              function(item){
                                return <li key={item.id}><a href={ "/items/" + item.id } className="product-list-item-link"><ProductsListItem productItem={item}/></a></li>;
                              }
                            );
    return (
      <div className="container content-container products-list b-radius-xs bg-white">
        <ul className="products-list-result list-unstyled">
          { !this.state.error && this.state.no_results ? 
          ( <h2 className="text-center p-a-sm">Ops... Não encontramos nada...<br/> Tente pesquisar com outras palavras. </h2>) : productsListItems}
          { this.state.error ? 
          ( <h2 className="text-center error-msg p-a-sm">Ops... Algo não deu certo...<br/> Tente pesquisar novamente mais tarde. </h2>) : '' }
        </ul>
      </div>
    );
  }
}

export default ProductsList;