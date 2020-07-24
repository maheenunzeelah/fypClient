import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Field, reduxForm, isPristine } from 'redux-form';
import validate from '../validate';
import renderField from '../renderField';
import { connect } from 'react-redux';
import { teacherSignup, studentAuth } from '../../actions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { async } from 'q';
import PropTypes from 'prop-types';

class SignupFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextisDisabled: true,
      registerisDisabled: true,
  
   
    }
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticatedTeacher){
      window.location.replace('/dashboard')
    }
    else if(this.props.auth.isAuthenticatedStudent){
      window.location.replace('/dashboard/addQues')
    }
    }
    componentWillReceiveProps(nextProps){
  
     if(nextProps.auth.isAuthenticatedTeacher){
      window.location.replace('/dashboard')
     }
     else if(nextProps.auth.isAuthenticatedStudent){
      window.location.replace('/dashboard/addQues')
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

    console.log(formValues)
    if (formValues.role == "student") {
      this.props.studentAuth(formValues)
      this.props.onNext();

    }
    else
      this.props.teacherSignup(formValues);

  }


  render() {
    console.log(this.props.role)
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error" encType='multipart/form-data' style={{ color: " white" }}>
              <p className="h4 text-center pink-text font-weight-bold" style={{ marginTop: "50px", marginBottom: "-60px" }} >Sign up</p>
              <div style={{ textAlign: "left" }}>
                <Field name="firstName" type="text" component={renderField} label="First Name" />
                <Field name="lastName" type="text" component={renderField} label="Last Name" />
                <Field name="email" type="email" component={renderField} label="Email" />
                <Field name="password" type="password" component={renderField} label="Password" />
                <Field name="department" type="text" component={renderField} label="Department" />
                {this.props.role==='student'?(<div><select><option>2016-17</option></select>
                <div className="text-center mt-4">
                  <MDBBtn id="StuNext" type="submit" className="pink accent-2" style={{ marginBottom: "74px" }} disabled={this.state.nextisDisabled} >
                    Next
              </MDBBtn>
              </div>
              </div>):(<div>
                  <MDBBtn className="pink accent-2" type="submit" style={{ marginBottom: "74px" }} disabled={this.state.registerisDisabled} >
                    Register
              </MDBBtn>
                </div>)}
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

SignupFirst.protoTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state.formInp);

  return {
    signup: state.signup,
    auth:state.auth
    //formInp:state.formInp 
  }
}

const formWrapped = reduxForm({
  form: 'SignupFirst',
  validate
})(SignupFirst);

export default connect(mapStateToProps, { teacherSignup, studentAuth })(formWrapped); 