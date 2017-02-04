import React, { Component } from 'react';

class Comparator extends Component {
  render() {
    return (
      <line
        className="Line"
        x1={ this.props.xCoord }
        x2={ this.props.xCoord }
        y1="4"
        y2="20">
      </line>
    );
  }
}

export default Comparator;
