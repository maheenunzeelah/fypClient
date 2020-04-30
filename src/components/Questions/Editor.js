import React, { Component } from 'react';
import { Field,change,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
class Editor extends Component {
  state = {
    ischecked: false

  }
  componentDidMount() {
    const {corr}=this.props
    //For Editing Questions
    //Autofill the fields with question and respective answers of the question being edited
    //If question field then value of question and if answers field then values of answers
    this.props.name === "question" ? this.props.dispatch(change('Editor', this.props.name, this.props.defaultQues)) :(
      this.props.dispatch(change('Editor',this.props.name, this.props.answer)
      // this.props.dispatch(change('Editor', this.props.name, this.props.answer))
    ))
if(corr!=undefined){
    corr.map(corr=>{
      console.log(this.props.name)

      corr===this.props.name?this.setState({ischecked:true}):this.setState({ischecked:false})
    })
  }}
  handleClick = (e) => {
    if (e.target.checked == true) {
      this.setState({ ischecked: true })
      { this.props.corrAns(this.props.name, this.state.ischecked) }
    }
    else {
      this.setState({
        ischecked: false
      })
      { this.props.corrAns('', this.state.ischecked) }
    }

  }
  handleChange=(e)=>{
    console.log(e.target.value)
  }
  render() {
   console.log(this.props.name)
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
            <Field name={this.props.name} onChange={(e)=>this.handleChange(e)} value={this.props.defaultQues} component="textarea" style={{ width: "650px", height: "180px", margin: "20px" }} />
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