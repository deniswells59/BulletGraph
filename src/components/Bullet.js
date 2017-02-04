import React, { Component } from 'react';
import Marker from './Marker.js';
import Performance from './Performance.js';
import Value from './Value.js';
import Comparator from './Comparator.js';
import Title from './Title.js';

import '../style/Bullet.css';

class Bullet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphWidth: 798.5,
    }

    this.renderMarkers = this.renderMarkers.bind(this);
    this.getEnd = this.getEnd.bind(this);
  }

  renderMarkers(end, markerCount) {
    const markerIterator = end / markerCount;
    const translateIterator = this.state.graphWidth / markerCount;

    let markers = [];
    for(let i = 0; i <= markerCount; i++) {
      let value = Math.round(markerIterator * i);
      let translate = i ? translateIterator * i : 1.5;

      markers.push(<Marker key={ i } translate={ translate } value={ value } />)
    }
    return markers;
  }

  getEnd(val) {
    return this.state.graphWidth / (this.props.rangeEnd / val);
  }

  render() {
    const markers           = this.renderMarkers(this.props.rangeEnd, this.props.markerCount);
    const comparatorCoord   = this.getEnd(this.props.comparator);
    const poorWidth         = this.getEnd(this.props.poorEnd);
    const satisfactoryWidth = this.getEnd(this.props.satisfactoryEnd);
    const valueWidth        = this.getEnd(this.props.value);

    return (
      <div className="BulletWrapper">
        <svg className="BulletGraph" width="960" height="60">
          <g className="Graph" transform="translate(120, 5)">

            <Performance type="Good" width="800" />
            <Performance type="Satisfactory" width={ satisfactoryWidth } />
            <Performance type="Poor" width={ poorWidth } />

            <Value width={ valueWidth } />

            <Comparator xCoord={ comparatorCoord } />

            { markers }

            <Title { ...this.props }/>
          </g>
        </svg>
      </div>
    );
  }
}

export default Bullet;
