import React, { Component } from 'react';
import { Field,change,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
class Editor extends Component {
  state = {
    ischecked: false

  }
  componentDidMount() {
    const {corr}=this.props
    console.log(corr)
    //For Editing Questions
    //Autofill the fields with question and respective answers of the question being edited
    //If question field then value of question and if answers field then values of answers
    this.props.name === "question" ? this.props.dispatch(change('Editor', this.props.name, this.props.defaultQues)) :(
      this.props.dispatch(change('Editor',this.props.name, this.props.answer)
      // this.props.dispatch(change('Editor', this.props.name, this.props.answer))
    ))
if(corr!=undefined){
    for(let i=0;i<corr.length;i++)
    {
      console.log(corr[i],this.props.name)
      if(corr[i]===this.props.name){this.setState({ischecked:true})
       break}
       else { this.setState({ischecked:false})}

    }
  }}
  handleClick = (e) => {
    if (e.target.checked == true) {
    // send corr ans in callback function
    //state change happens asynchronously ,if we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function
      this.setState({ischecked: true},() => this.props.corrAns(this.props.name, this.state.ischecked) )

    }
    
    else {
      console.log(e.target.checked)
      this.setState({...this.state,
        ischecked: false
      },() => this.props.corrAns(this.props.name, this.state.ischecked))
     
     
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
            <Field name={this.props.name}  value={this.props.defaultQues} component="textarea" style={{ width: "650px", height: "180px", margin: "20px" }} />
          </div>
        </div>


      </div>


      )
    }
  }
}
let formWrapped = reduxForm({
  // a unique name for the form
  form: 'Editor'
})(Editor)
export default formWrapped;