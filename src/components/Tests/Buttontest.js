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
        <button onClick={this.handleClick} className="btn" id="myButton1" style={{backgroundColor:"#00416d", color:"white"}} data-toggle="collapse" data-target="#demo1,#demo2,#demo3"  >
          {this.state.isToggleOn ? 'Expand All' : 'Collapse All'}
        </button>
      );
    }
  }
  
 

  export default Buttontest;