import React, { Component } from 'react';

class Animate extends Component {

  render() {
    return (
      <animate id="opacityAnimation"
         attributeName="opacity"
         from="0" to="1" dur=".3s"
         begin={ `${this.props.elemId}.mouseover` }
         end={ `${this.props.elemId}.mouseout` } />
    )
  }
}

export default Animate;
