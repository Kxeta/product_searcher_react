import React, { Component } from 'react';


import SearchBar from '../components/search-bar/search-bar';
import Breadcrumb from '../components/ui-components/breadcrumb/breadcrumb';
import ProductsList from '../components/products-list/products-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Breadcrumb />
        <ProductsList />

      </div>
    );
  }
}

export default App;
