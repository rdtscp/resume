import React, { Component } from 'react';
import Code from 'react-code-prettify';
import TypeWriter from 'react-typewriter';

import Alexander from '../Resources.js';


class CodeCV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            compiling: false
        };
    }

    compile = (e) => this.setState({compiling: true});

    render() {
        document.body.style = 'background: #1d1f21;';
        if (this.state.compiling) {
            return (
                <div className="code-container">
                    <Code codeString={Alexander} language="cpp" />
                    <br />
                    <br />
                    <a className="compile-but" onClick={this.compile}>compile</a>
                    <br />
                    <br />
                    <div id="console">
                        $ <TypeWriter onTypingEnd={this.props.compile} fixed="true" typing={1}>
                            clang++ alexander.cpp -o resume.out
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <div id="console" style={{width: 355}}>
                        $
                    </div>
                </div>
            );
        }
    }
}

export default CodeCV;
