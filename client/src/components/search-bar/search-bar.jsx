import React, { Component } from 'react';

import './search-bar.css';
import logo from '../../images/logo__small.png';
import IconButton from '../ui-components/buttons/icon-button/icon-button'

class SearchBar extends Component {
	constructor(props){
    super(props);
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
              <form action="" method="POST" className="bg-white form-inline form-inline-flex">
                <div className="form-group search-field-group">
                  <input type="text" className="form-control search-field" id="" placeholder="Nunca deixe de buscar" />
                </div>
                <IconButton wrapperClasses="inline" classes="search-button" styleClass="default" icon="search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;