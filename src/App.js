import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    this.state = {
      compiled: false
    };
  }

  render() {
    if (this.state.compiled) {
      return (
        <div className="App">
          Compiled Resume
        </div>
      );
    }
    else {
      return (
        <div className="App">
          Code Resume
        </div>
      );
    }
  }
}

export default App;
