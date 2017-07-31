import React, { Component } from 'react';
import $ from 'jquery';

import './search-bar.css';
import logo from '../../images/logo__small.png';
import IconButton from '../ui-components/buttons/icon-button/icon-button'

class SearchBar extends Component {
	constructor(props){
    super(props);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSubmitSearch(event){
    event.preventDefault();
    var searchText = $('#search-field-text').val();
    window.location = '/items?search=' + encodeURIComponent(searchText);
  }
  
  render() {
    return (
      <div className="search-bar p-v-sm">
        <div className="container">
          <div className="search-bar-wrapper">
            <div className="logo-wrapper m-r-lg">
              <img src={logo} alt="Mercado Livre"/>
            </div>
            <div className="search-field-wrapper b-radius-xs">
              <form action="" method="POST" className="bg-white form-inline form-inline-flex" onSubmit={(e) => this.handleSubmitSearch(e)}>
                <div className="form-group search-field-group">
                  <input type="text" className="form-control search-field" id="search-field-text" placeholder="Nunca deixe de buscar" />
                </div>
                <IconButton wrapperClasses="inline" classes="search-button" styleClass="default" icon="search" onClick={(e) => this.handleSubmitSearch(e)}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;