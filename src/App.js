import React, { Component } from 'react';
import testImg from './img/test.jpg';
import './App.css';

class App extends Component {
  state = {
    rect: []
  };
  componentDidMount() {
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
  }
  render() {
    const { rect } = this.state;
    return (
      <div className="App">
        <img
          ref={img => (this.img = img)}
          id="img-to-track"
          src={testImg}
          alt="test"
        />
        {rect.map((track, i) => {
          return (
            <div
              key={i}
              style={{
                width: track.width,
                height: track.height,
                top: track.y,
                left: track.x,
                position: 'absolute',
                border: '1px solid red'
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
