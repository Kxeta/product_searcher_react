import React, { Component } from 'react';

import './breadcrumb.css';

class Breadcrumb extends Component {
	constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="breadcrumb">
        <h1 className="text-center">Breadcrumb</h1>
      </div>
    );
  }
}

export default Breadcrumb;