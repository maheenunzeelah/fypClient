import React, {Component} from 'react'

class Buttontest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick} class="btn btn-primary" id="myButton1" data-toggle="collapse" data-target="#demo1,#demo2,#demo3"  >
          {this.state.isToggleOn ? 'Expand All' : 'Collapse All'}
        </button>
      );
    }
  }
  
 

  export default Buttontest;