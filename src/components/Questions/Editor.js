import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
class Editor extends Component {
  state={
    ischecked:false

  }
  handleClick = (e) => {
   if(e.target.checked==true){
     this.setState({ischecked:true})
     {this.props.corrAns(this.props.name,this.state.ischecked)}
   }
   else{
     this.setState({
       ischecked:false
     })
     {this.props.corrAns('',this.state.ischecked)}
   }
 
  }
  render() {

    if (!this.props.question) {
      return (
        <div className="Editor">
          <div>


          <div >
            <Field
            checked={this.state.ischecked}
              component="input"
              type="checkbox"
              onClick={this.handleClick}
            />&nbsp;&nbsp;
         <label className="text-info">This is the correct answer</label>
         </div>
            <div>
              <Field name={this.props.name} component="textarea" style={{ width: "650px", height: "180px", margin: "20px" }} />
            </div>
          </div>


        </div>
      );
    }
    else {
      return (
        <div className="Editor">
          <div>

            <div>
              <Field name={this.props.name} component="textarea" style={{ width: "650px", height: "180px", margin: "20px" }} />
            </div>
          </div>


        </div>)
    }
  }
}
export default Editor;