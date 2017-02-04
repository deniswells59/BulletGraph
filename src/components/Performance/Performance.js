import React, { Component } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './Performance.css';

class Performance extends Component {
  render() {
    return (
      <g>
        <rect
          id={ `Performance_${this.props.type}_${this.props.id}` }
          className={ `Performance ${this.props.type}` }
          rx="2"
          ry="2"
          width={ this.props.width }
          height="25">
        </rect>
        <Tooltip
          id={ this.props.id }
          xCoord={ this.props.width }
          elemId={`Performance_${this.props.type}_${this.props.id}`}
          animateValue={ this.props.perfValue }/>
      </g>
    );
  }
}

export default Performance;
