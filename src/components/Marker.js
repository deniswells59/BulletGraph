import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <g className="Marker" transform={`translate(${ this.props.translate }, 0)`}>
        <line className="Line" y1="25" y2="35"></line>
        <text textAnchor="middle" dy="1em" y="35">{ this.props.value }</text>
      </g>
    );
  }
}

export default Marker;
