import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form'
class Editor extends Component {
  state = {
    ischecked: false

  }
  componentDidMount() {
    console.log(this.props.answer)
    //For Editing Questions
    //Autofill the feilds with question and respective answers of the question being edited
    //If question feild then value of question and if answers feild then values of answers
    this.props.name === "question" ? this.props.dispatch(change('Editor', this.props.name, this.props.defaultQues)) :
      this.props.dispatch(change('Editor', this.props.name, this.props.answer))
  }
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
  render() {

    if (this.props.question) {
      return (
        <div className="Editor">
          <div>

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



      )
    }
  }
}
export default reduxForm({
  form: 'Editor'

})(Editor);