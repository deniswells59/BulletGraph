import React, { Component } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './Value.css';

class Value extends Component {
  render() {
    return (
      <g id={ `g_${this.props.id}` }>
        <rect
          id={ `Value_${ this.props.id }`}
          className="Value"
          width={ this.props.width }
          height="8.333333333333334"
          x="0"
          y="8.333333333333334"></rect>
        <Tooltip
          id={ this.props.id }
          xCoord={ this.props.width }
          elemId={`Value_${this.props.id}`}
          animateValue={ this.props.value }/>
      </g>
    );
  }
}

export default Value;
