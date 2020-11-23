import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Field, reduxForm, isPristine } from 'redux-form';
import validate from '../validate';
import {renderField,renderDepartField,renderBatchField} from '../renderField';
import { connect } from 'react-redux';
import { teacherSignup, studentAuth } from '../../actions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { async } from 'q';
import PropTypes from 'prop-types';
import { Card, CardContent ,Select,MenuItem,FormControl,InputLabel,Button} from '@material-ui/core';

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
    // else if(this.props.auth.isAuthenticatedStudent){
    //   window.location.replace('/dashboard/addQues')
    // }
    }
    componentWillReceiveProps(nextProps){
  
     if(nextProps.auth.isAuthenticatedTeacher){
      window.location.replace('/dashboard')
     }
    //  else if(nextProps.auth.isAuthenticatedStudent){
    //   window.location.replace('/dashboard/addQues')
    //}
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
    if (this.props.role == "student") {
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
          <MDBCol md="6" >
            <Card className="m-5 border border-dark ">
              <CardContent  >
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error " encType='multipart/form-data' style={{ color: " #1C2331" }}>
              <p className="h4 text-center   font-weight-bold" style={{ marginTop: "50px", marginBottom: "-60px" }} >Sign up</p>
              <div style={{ textAlign: "left" }}>
                <div className="row">
                  <div className="col-sm-6">
                <Field name="firstName" type="text" component={renderField}  label="First Name" />
                </div>
                <div className="col-sm-6">
                <Field name="lastName" type="text" component={renderField}  label="Last Name" />
                </div>
                </div>
                <Field name="email" type="email" component={renderField} label="Email" />
                <div className="row">
                  <div className='col-sm-6'>
                <Field name="password" type="password" component={renderField} label="Password" />
                </div>
                <div className="col-sm-6">
                <label>Department</label>
                <Field name="department" component={renderDepartField} />
                </div>
                </div>
                {this.props.role==='student'?(
                  <div>
                <div className="row">
                 <div className="col-sm-6">
                   <label>Batch</label>
                  <Field name="batch" component={renderBatchField}  />
                  </div>
                  <div className="col-sm-6">
              <Field name="rollNo" type="number" component={renderField}  label="Roll No" />
              </div>
              </div>
                <div className="text-center mt-4">
                  <Button id="StuNext" type="submit" className="pink white-text btn btn-lg" style={{ marginBottom: "74px" }} >
                    Next
              </Button>
              </div>
              
             
              </div>):(<div className="text-center mt-5">
                  <Button className="unique-color-dark white-text btn btn-lg " type="submit" style={{ marginBottom: "74px" }}>
                    Register
              </Button>
                </div>)}
              </div>
            </form>
            </CardContent>
            </Card>
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
 destroyOnUnmount: false,
 validate
})(SignupFirst);

export default connect(mapStateToProps, { teacherSignup, studentAuth })(formWrapped); 