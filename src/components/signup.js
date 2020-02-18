import React,{Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import {Field, reduxForm ,isPristine} from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


class Signup extends Component {

  buttonEnable=(e)=>{
    if(e.target.checked){
     document.getElementById('StuNext').removeAttribute('disabled');
     console.log(document.getElementById('StuNext'));
    }
  }  
  handleSubmit=(formValues)=>{
  console.log(formValues);
 
  //  axios.post('http://localhost:3001/signup',{fname:this.state.fname,lname:this.state.lname,email:this.state.email,password:this.state.password})
  //  .then(res => {
  //    if(res.data==="Something went wrong"){
  //      document.write(res.data);
  //    }
  //    else{
  //    const token = res.data;
  //    localStorage.setItem("authorization",token);
  //    alert("User added");
  //    window.location.reload();
  //    }
     
  //  })
  }


      render(){ 
        
         return (
    <MDBContainer >
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
            <p className="h4 text-center" style={{ marginTop:"50px", marginBottom:"-60px"}} >Sign up</p>
            <div style={{textAlign:"left"}}>
              <Field name="firstName" type="text" component={renderField} label="First Name"  />
              <Field name="lastName" type="text" component={renderField} label="Last Name"  />
              <Field name="email" type="email" component={renderField} label="Email"  />
              <Field name="password" type="password" component={renderField} label="Password"  />
              <label>Register as a:</label>
        <div>
          <label>
            <Field name="role" component="input" type="radio" value="teacher" />
            Teacher
          </label><br />
          <label>
            <Field name="role" component="input" type="radio" value="student"  onClick={this.buttonEnable}/>
            Student
          </label>
          <Field name="role" component={renderError} />
        </div>
            <div className="text-center mt-4">
              <MDBBtn  id="StuNext" className="default-color" type="submit" style={{marginBottom:"74px"}} disabled={this.props.pristine}>
                Next
              </MDBBtn>
              <MDBBtn className="default-color" type="submit" style={{marginBottom:"74px"}}>
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

export default reduxForm({
  form: 'Signup',
  validate,
   pristine: isPristine('role')
})(Signup);