import React, { Component } from 'react';

class SkillList extends Component {

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
            <div className="skill-entry">
                <h4><span className="icon"><a onClick={this.toggle} class="fa fa-caret-down black"></a></span><b>{this.props.title}</b></h4>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
          );
      } else {
          return (
            <div class="skill-entry">
                <h4><span class="icon"><a onClick={this.toggle} class="fa fa-caret-right black"></a></span><b>{this.props.title}</b></h4>
            </div>
          );
      }

  }

}

export default SkillList;