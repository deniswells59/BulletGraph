import React, { Component } from 'react';
import Bullet from '../components/Bullet/Bullet';

import '../style/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.getData()
    }
  }

  getData() {
    return [{ title: "revenue" }]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Yewno Demo</h2>
        </div>

        <Bullet
          rangeEnd="800"
          markerCount="8"
          comparator="700"
          poorEnd="150"
          satisfactoryEnd="500"
          value="600"
          title="Revenue"

        />

      </div>
    );
  }
}

export default App;
