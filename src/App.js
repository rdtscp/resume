import React, { Component } from 'react';

import CodeCV from './Views/CodeCV.js';
import CompiledCV from './Views/CompiledCV.js';

import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compiled: false
    };
  }

  compile = (e) => this.setState({ compiled: true });

  isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  render() {
    if (this.state.compiled) {
          return (<CompiledCV />);
    } else {
      if (this.isMobileDevice()) {
      alert("Cannot View Source on Mobile");
        return (<CompiledCV />);
      }
      else
        return (<CodeCV compile={this.compile} />);
    }
  } 

}

export default App;
