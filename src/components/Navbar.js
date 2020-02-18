import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TourPage from "./TourPage";
import Signup from "./signup";
import Login from './login';

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
      <MDBNavbar color="teal"  dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <a className="navbar-brand white-text" href="#">E-Catechism</a>
          </MDBNavbarNav>
          <MDBNavbarNav right  classsName="cyan-text">
            <MDBNavItem active>
            <a className="navbar-brand white-text" href="/login">Login</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="navbar-brand white-text" href="/signup">Sign Up</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>       
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <a className="navbar-brand white-text" href="/">Home</a>
            </MDBNavItem>
            <MDBNavItem>
            <a className="nav-link white-text" href="/tourpage">Take a Tour</a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">FAQ</MDBNavLink>
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