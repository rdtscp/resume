import React, { Component } from 'react';
import Code from 'react-code-prettify';
import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'

import Alexander from '../Resources.js';

// const termLines = [
//     {
//       text: 'clang++ alexander.cpp -o resume.out',
//       cmd: true
//     },
//     {
//       text: '$',
//       cmd: false
//     }
//   ]

const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

const termLines = [
    {
        text: 'clang++ alexander.cpp -o resume.out',
        cmd: true,
        delay: 20
    },
    {
        text: './resume.out',
        cmd: true,
        delay: 20
    },
    {
        text: '✔ Loaded app',
        cmd: false,
        repeat: true,
        repeatCount: 5,
        frames: spinner.map(function (spinner) {
            return {
            text: spinner + ' Loading Resume',
            delay: 40
            }
        })
    },
  ]


class CodeCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            readme: "",
            compiling: false
        };
    }

    compile = (e) => {
        this.setState({compiling: true});
        setTimeout(this.props.compile, 5000);
    }

    render() {
        document.body.style = 'background: #1d1f21;';
        if (this.state.compiling) {
            return (
                <div className="code-container">
                    <Code codeString={Alexander} language="cpp" />
                    <br />
                    <br />
                    <br />
                    <div style={{width: 450}}>
                        <Terminal lines={termLines} interval={80} height={125} white />
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            );
        }
        else {
            return (
                <div className="code-container">
                    <Code codeString={Alexander} language="cpp" />
                    <br />
                    <br />
                    <a className="compile-but" onClick={this.compile}>compile</a>
                    <br />
                    <br />
                </div>
            );
        }
    }
}

export default CodeCV;
