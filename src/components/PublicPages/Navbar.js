import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TourPage from "./TourPage";
import Signup from "../Authentication/Signup";
import Login from '../Authentication/login';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
// handleClick=(e)=>{
// this.
// }

render() {
  return (
    <Router>      
      <MDBNavbar style={{ backgroundColor: "#c56183" }}  dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <a className="navbar-brand white-text" href="#">E-Catechism</a>
          </MDBNavbarNav>
          <MDBNavbarNav right  className="cyan-text">
            <MDBNavItem >
            <a className="navbar-brand white-text" href="/login">Login</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="navbar-brand white-text" href="/signupas">Sign Up</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>       
      <MDBNavbar style={{backgroundColor:'#d9adad'}} dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
            <a className="navbar-brand white-text" href="/">Home</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="nav-link white-text" href="/tourpage">Take a Tour</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="nav-link white-text" href="#">FAQ</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="nav-link white-text" href="/contact">Contact Us</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;