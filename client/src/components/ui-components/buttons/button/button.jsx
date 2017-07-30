import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return(
      <div className={this.props.wrapperClasses}>
        <button className={"custom-btn "+ this.props.classes +" btn btn-"+ this.props.styleClass }
          onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;