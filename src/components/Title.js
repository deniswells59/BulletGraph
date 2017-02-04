import React, { Component } from 'react';

class Title extends Component {
  render() {
    const height = this.props.subtitle ? 12.5 : 18;
    return (
      <g transform={ `translate(-6,${height})` } className="TitleWrapper">
        <text className="Title">{ this.props.title }</text>
        <text className="Subtitle" dy="1em">{ this.props.subtitle }</text>
      </g>
    );
  }
}

export default Title;
