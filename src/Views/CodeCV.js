import React, { Component } from 'react';
import Code from 'react-code-prettify';
import TypeWriter from 'react-typewriter';

import Alexander from '../Resources.js';


class CodeCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            readme: "",
            compiling: false
        };
    }

    compile = (e) => this.setState({compiling: true});

    compiled = (e) => {
        document.getElementById("console").innerText = document.getElementById("console").innerText + "\n alex@wilson: ~$";
        setTimeout(this.props.compile, 700);
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
                    <br />
                    <br />
                    <div id="console">
                        alex@wilson: ~$ <TypeWriter onTypingEnd={this.compiled} fixed="true" typing={1}>
                            clang++ alexander.cpp -o resume.out
                        </TypeWriter>
                    </div>
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
                    <div id="console" style={{width: 429}}>
                    alex@wilson: ~$
                    </div>
                </div>
            );
        }
    }
}

export default CodeCV;
