import './App.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import FacesLayer from './face/components/FacesLayer';
import FaceActionBar from './face/components/FaceActionBar';
// import testImg from './img/test.jpg';

class App extends Component {
  state = {
    rect: []
  };
  componentDidMount() {
    /*
    const tracker = new window.tracking.ObjectTracker(['face']);
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

    if (this.img) {
      this.img.onload = () => {
        window.tracking.track('#img-to-track', tracker);
        tracker.on('track', event => {
          event.data.forEach(rect => {
            this.setState({
              rect: [...this.state.rect, rect]
            });
          });
        });
      };
    }
		*/
  }
  render() {
    // const { rect } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <FacesLayer />
          <FaceActionBar />
        </div>
      </Provider>
    );
  }
}

export default App;
