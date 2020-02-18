import React,{Component} from 'react';
import axios from 'axios';
import {Link, NavLink, BrowserRouter, Route, Switch} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Dashboard from './Dashboard';
import Account from './Account';


class Login extends Component {
  state={
    email:"",
    password: ""
  }
  handleSubmit=(e)=>{
   e.preventDefault();
   axios.post('http://localhost:3001/login',{email:this.state.email,password:this.state.password})
   .then(res => {
     if(res.data==="user not found"){
       alert(res.data);
       window.location.reload();
     }
     else{
        const token = res.data;
        localStorage.setItem("authorization",token);
        alert("login");
        window.location.replace("/dashboard");
        }
     
   })

  }
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
      render(){ 
         return (
        <div>   
{/*           
        <Route exact path="/account" component={Account}></Route> */}
       
    <MDBContainer >
      <MDBRow>
      <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <form onSubmit={this.handleSubmit}>
            <p className="h4 text-center " style={{ marginTop:"50px", marginBottom:"-60px"}}>Login</p>
            <div style={{textAlign:"left"}}>
            <label
              htmlFor="email"
              className="black-text"
            >
               Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={this.handlechange}
            />
            <br />
            <label
              htmlFor="password"
              className="black-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={this.handlechange}
            />
            <div className="text-center mt-4">
              <MDBBtn className="default-color" type="submit" style={{marginBottom:"74px"}} >
                Login
              </MDBBtn>
            </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
}

export default Login;