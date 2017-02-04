import React, { Component } from 'react';
import Tooltip from  '../Tooltip/Tooltip.js';
import './Comparator.css';

class Comparator extends Component {

  render() {
    return (
      <g id={ `g_${this.props.id}` }>
        <line
          id={ `Comparator_${this.props.id}` }
          className="Line Comparator"
          x1={ this.props.xCoord }
          x2={ this.props.xCoord }
          y1="4"
          y2="20">
        </line>

        <Tooltip
          id={ this.props.id }
          xCoord={ this.props.xCoord }
          elemId={`Comparator_${this.props.id}`}
          animateValue={ this.props.comparator }/>

      </g>
    );
  }
}

export default Comparator;
