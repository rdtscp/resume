import React, { Component } from 'react';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    toggle = (e) => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        if (this.state.visible) {
            return (
                <div className="project-entry">
                    <h4 className="is-4">
                        <span className="icon">
                            <a className="fa fa-caret-down black" onClick={this.toggle}></a>
                        </span>
                        <b><a href={this.props.github} className="fa fa-link black"></a>&nbsp; {this.props.title}</b>
                    </h4>
                    <div id="edb_compsci">
                    <h7 className="title is-7">{this.props.date} </h7>
                    <div className="content">
                        <blockquote>
                            {this.props.children}
                        </blockquote>
                    </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="project-entry">
                    <h4 className="is-4">
                        <span className="icon">
                            <a className="fa fa-caret-right black" onClick={this.toggle}></a>
                        </span>
                        <b><a href={this.props.github} className="fa fa-link black"></a>&nbsp; {this.props.title}</b>
                    </h4>
                    <div id="edb_compsci">
                    </div>
                </div>
            );
        }

    }

}

export default Project;