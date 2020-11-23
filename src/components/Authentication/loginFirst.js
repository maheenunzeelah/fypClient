import React,{Component} from 'react';
import axios from 'axios';
import { RadioButton} from '@material-ui/core';
import {Link, NavLink, BrowserRouter, Route, Switch,withRouter} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Dashboard from '../Dashboard';
import Account from '../Account';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import validate from '../validate';
import {renderField} from '../renderField';
import {teacherLogin,studentAuth} from '../../actions'; 
import PropTypes from 'prop-types';


class LoginFirst extends Component {
  constructor(){
    super();
    this.state={
      nextisDisabled:true,
      registerisDisabled:true
    }
  }
  componentDidMount(){
  if(this.props.auth.isAuthenticatedTeacher){
    window.location.replace('/dashboard')
  }
  else if(this.props.auth.isAuthenticatedStudent){
    window.location.replace('/student')
  }
  }
 
  buttonEnable=(e)=>{
    if(e.target.value==='student'){
    
     this.setState({
       nextisDisabled:false,
       registerisDisabled:true
     })
     
    }
    else{
      this.setState({
        nextisDisabled:true,
        registerisDisabled:false
      })
    }
  }  
  
  handleSubmit=(formValues)=>{
    if(formValues.role=="student"){
     this.props.studentAuth(formValues)
     this.props.onNext();
    }
   else
    this.props.teacherLogin(formValues);
  
  //  e.preventDefault();
  //  axios.post('http://localhost:3001/login',{email:this.state.email,password:this.state.password})
  //  .then(res => {
  //    if(res.data==="user not found"){
  //      alert(res.data);
  //      window.location.reload();
  //    }
  //    else{
  //       const token = res.data;
  //       localStorage.setItem("authorization",token);
  //       alert("login");
  //       window.location.replace("/dashboard");
  //       }
     
  //  })

  }
 
     
  render(){ 
     
    return (
<MDBContainer >
 <MDBRow>
   <MDBCol md="3"></MDBCol>
   <MDBCol md="6">
     <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error" style={{ color:" black", fontSize:'16px'}}>
       <p className="h4 text-center pink-text font-weight-bold " style={{ marginTop:"50px", marginBottom:"-60px" ,fontSize:'30px'}} >LOG IN</p>
       <div style={{textAlign:"left"}}>
         
         <Field name="email" type="email" component={renderField} label="Email"  />
         <Field name="password" type="password" component={renderField} label="Password"  />
         <label className="pb-2 pt-3">Login as a:</label>
   <div>
     <label >
       <Field name="role" component="input" type="radio" value="teacher"  onClick={this.buttonEnable} />&nbsp;&nbsp;
       Teacher
     </label><br />
     <label>
       <Field name="role" component="input" type="radio" value="student"  onClick={this.buttonEnable}/>&nbsp;&nbsp;
       Student
     </label>
     <Field name="role" component={renderError} />
   </div>
       <div className="text-center mt-4">
         <MDBBtn  id="StuNext" className="pink accent-2 black-text" type="submit" style={{marginBottom:"74px" }} disabled={this.state.nextisDisabled}>
           Next
         </MDBBtn>
         <MDBBtn className="pink accent-2 black-text" type="submit" style={{marginBottom:"74px"}} disabled={this.state.registerisDisabled}>
           Login
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

LoginFirst.protoTypes={
auth:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>{

return {login: state.login,
auth:state.auth
}
} 

const formWrapped= reduxForm({
form: 'Login',
destroyOnUnmount: false,
validate
})(LoginFirst);

export default withRouter(connect(mapStateToProps,{teacherLogin,studentAuth})(formWrapped)); 