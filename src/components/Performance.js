import React, { Component } from 'react';

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
