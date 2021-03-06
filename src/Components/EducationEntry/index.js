import React, { Component } from "react";

class EducationEntry extends Component {

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
                <div className="edu-entry">
                    <h4 className="is-4">
                        <span className="icon">
                            <a className="fa fa-caret-down black" onClick={this.toggle}></a>
                        </span>
                        <b> {this.props.degree},</b>  <small>{this.props.school}</small>
                        <br />
                        <small><i> {this.props.classification} </i></small>
                    </h4>
                    <div id="edb_compsci">
                        <h1 className="title is-7">{this.props.date} </h1>
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
                <div className="edu-entry">
                    <h4 className="is-4">
                        <span className="icon">
                            <a className="fa fa-caret-right black" onClick={this.toggle}></a>
                        </span>
                        <b> {this.props.degree},</b>  <small>{this.props.school}</small>
                    </h4>
                    <div id="edb_compsci">
                    </div>
                </div>
            );
        }

    }

}

export default EducationEntry;