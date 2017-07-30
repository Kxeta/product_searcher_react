import React, { Component } from 'react';


import SearchBar from '../components/search-bar/search-bar';
import Breadcrumb from '../components/ui-components/breadcrumb/breadcrumb';
import ProductsList from '../components/products-list/products-list';
import ProductDetail from '../components/product-detail/product-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Breadcrumb />
        <ProductDetail />

      </div>
    );
  }
}

export default App;
