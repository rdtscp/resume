import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compiled: false
    };
  }

  compile = (e) => {
    this.setState({
      compiled: true
    });
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
