import React, { Component } from 'react';

import CodeCV from './Views/CodeCV.js';
import CompiledCV from './Views/CompiledCV.js';

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
        <CompiledCV />
      );
    }
    else {
      return (
        <CodeCV />
      );
    }
  }
}

export default App;
