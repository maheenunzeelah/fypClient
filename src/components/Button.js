import React, {Component} from 'react'

class Button extends React.Component {
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
        <button onClick={this.handleClick} class="btn pink white-text" id="myButton1" data-toggle="collapse" data-target="#demo">
          {this.state.isToggleOn ? 'Expand Answers' : 'Collapse Answers'}
        </button>
      );
    }
  }
  
 

  export default Button;