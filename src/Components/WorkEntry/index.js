import React, { Component } from "react";

class WorkEntry extends Component {

  constructor(props) {
    super(props);
    if (this.props.date === null || this.props.date === undefined) {
      this.state = {
        visible: false
      };
    }
    else if (this.props.date.includes("Present")) {
      this.state = {
        visible: true
      };
    }
    else {
      this.state = {
        visible: false
      };
    }
  }

  toggle = (e) => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    if (this.state.visible) {
      return (
        <div className="work-entry">
          <h4>
            <span className="icon">
              <a className="fa fa-caret-down black" onClick={this.toggle}>
              </a>
            </span>
            <b> {this.props.title} </b>
          </h4>
          <div id="kal_2017">
            <h5><b>{this.props.company},</b> {this.props.location}</h5>
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
        <div className="work-entry">
          <h4>
            <span className="icon">
              <a className="fa fa-caret-right black" onClick={this.toggle}>
              </a>
            </span>
            <b> {this.props.title} </b>
          </h4>
        </div>
      );
    }

  }

}

export default WorkEntry;