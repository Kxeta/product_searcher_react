import React, { Component } from 'react';


import SearchBar from '../components/search-bar/search-bar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Content />

      </div>
    );
  }
}

export default App;
