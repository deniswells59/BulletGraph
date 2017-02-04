import React, { Component } from 'react';
import './Performance.css';

class Performance extends Component {
  render() {
    return (
      <rect
        className={ this.props.type }
        width={ this.props.width }
        height="25">
      </rect>
    );
  }
}

export default Performance;
