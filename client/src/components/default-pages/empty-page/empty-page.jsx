import React, { Component } from 'react';

import './empty-page.css';

class EmptyPage extends Component {
	constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container text-center">
        <h2>Pesquise pelo produto dos seus sonhos!</h2>
      </div>
    );
  }
}

export default EmptyPage;