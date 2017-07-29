import React, { Component } from 'react';
import './icon-button.css';

class IconButton extends Component {
  render() {
    return(
      <div className={this.props.wrapperClasses}>
        <button className={"icon-btn "+ this.props.classes +" btn btn-"+ this.props.styleClass }
          onClick={this.props.onClick}>
          <i className={"fa fa-"+ this.props.icon}></i>
        </button>
      </div>
    );
  }
}

export default IconButton;