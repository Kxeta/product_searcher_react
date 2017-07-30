import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ProductsList from '../../products-list/products-list';
import ProductDetail from '../../product-detail/product-detail';

class Products extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/items' component={ProductsList}/> 
          <Route path='/items/:id' component={ProductDetail}/>
        </Switch>
      </main>
    );
  }
}

export default Products;