import React, { Component } from 'react';

class Value extends Component {
  render() {
    return (
      <rect
        className="Value"
        width={ this.props.width } 
        height="8.333333333333334"
        x="0"
        y="8.333333333333334"></rect>
    );
  }
}

export default Value;
