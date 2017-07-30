import React, { Component } from 'react';
import './image.css';

class Image extends Component {
  render() {
    return(
      <div className={this.props.wrapperClasses}>
        <img src={this.props.src} alt={this.props.alt} className={"img img-responsive " + this.props.styleClass}/>
      </div>
    );
  }
}

export default Image;