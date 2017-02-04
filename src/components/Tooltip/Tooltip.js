import React, { Component } from 'react';
import Animate from './Animate';
import './Tooltip.css'

class Tooltip extends Component {

  componentDidMount() {
    const ctx = document.getElementById(`BulletGraph_${this.props.id}`),
         rectElm = ctx.getElementById(`Rect_${this.props.elemId}`),
      textElm = ctx.getElementById(`Tooltip_${this.props.elemId}`),
      SVGRect = textElm.getBBox();

      rectElm.setAttribute("width", SVGRect.width + 10);
      rectElm.setAttribute("height", SVGRect.height);
  }

  render() {
    return (
      <g>
        <rect
          x={ this.props.xCoord - 25 }
          y="25"
          rx="3"
          ry="3"
          id={ `Rect_${this.props.elemId}` }
          opacity="0"
          className="Tooltip">

          <Animate elemId={ `${this.props.elemId}` } />

        </rect>
        <text
          x={ this.props.xCoord - 20 }
          y="45"
          id={ `Tooltip_${this.props.elemId}` }
          fontSize="22"
          fill="#FFFFFF"
          opacity="0">

          { this.props.animateValue }
          <Animate elemId={ `${this.props.elemId}` } />

        </text>
      </g>
    );
  }
}

export default Tooltip;
