import React, { Component } from 'react';
import DataStore from '../stores/Data';
import Bullet from '../components/Bullet/Bullet';

import '../style/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DataStore.getData()
    }
  }

  renderBullets(data) {
    return data.map((obj, idx) => {
      obj.subtitle = obj.subtitle ? obj.subtitle : "";
      return (
        <Bullet
          key={ idx }
          id={ idx }
          title={ obj.title }
          subtitle={ obj.subtitle }
          rangeEnd={ obj.rangeEnd }
          markerCount={ obj.markerCount }
          poorEnd={ obj.poorEnd }
          satisfactoryEnd={ obj.satisfactoryEnd }
          comparator={ obj.comparator }
          value={ obj.value }
        />
      )
    })
  }

  render() {
    const bullets = this.renderBullets(this.state.data);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Yewno Demo</h2>
        </div>

      { bullets }

      </div>
    );
  }
}

export default App;
