import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Field, reduxForm, isPristine } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { connect } from 'react-redux';
import { teacherSignup } from '../actions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { async } from 'q';


class SignupFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextisDisabled: true,
      registerisDisabled: true
    }
  }


  buttonEnable = (e) => {
    if (e.target.value === 'student') {

      this.setState({
        nextisDisabled: false,
        registerisDisabled: true
      })

    }
    else {
      this.setState({
        nextisDisabled: true,
        registerisDisabled: false
      })
    }
  }
  handleSubmit = (formValues) => {

    this.props.teacherSignup(formValues);
    //   if(this.props.signup!=={}){
    // }

  }


  render() {
    //console.log(this.props)
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
              <p className="h4 text-center" style={{ marginTop: "50px", marginBottom: "-60px" }} >Sign up</p>
              <div style={{ textAlign: "left" }}>
                <Field name="firstName" type="text" component={renderField} label="First Name" />
                <Field name="lastName" type="text" component={renderField} label="Last Name" />
                <Field name="email" type="email" component={renderField} label="Email" />
                <Field name="password" type="password" component={renderField} label="Password" />
                <label>Register as a:</label>
                <div>
                  <label>
                    <Field  name="role" component="input" type="radio" value="teacher" onClick={this.buttonEnable} />
                    Teacher
          </label><br />
                  <label>
                    <Field name="role" component="input" type="radio" value="student" onClick={this.buttonEnable} />
                    Student
          </label>
                  <Field name="role" component={renderError} />
                </div>
                <div className="text-center mt-4">
                  <MDBBtn id="StuNext" className="default-color"  style={{ marginBottom: "74px" }} disabled={this.state.nextisDisabled} onClick={this.props.onNext}>
                    Next
              </MDBBtn>
                  <MDBBtn className="default-color" type="submit" style={{ marginBottom: "74px" }} disabled={this.state.registerisDisabled} >
                    Register
              </MDBBtn>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="ui error message">{error}</span> : false

const mapStateToProps = (state, ownProps) => {
  //console.log(state.formInp);

  return {
    signup: state.signup,
    //formInp:state.formInp 
  }
}

const formWrapped = reduxForm({
  form: 'SignupFirst',
  validate
})(SignupFirst);

export default connect(mapStateToProps, { teacherSignup })(formWrapped); 