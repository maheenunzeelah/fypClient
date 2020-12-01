import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse , MDBIcon} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TourPage from "./TourPage";
import Signup from "../Authentication/Signup";
import Login from '../Authentication/login';
import '../../css/Navbar.css';

class NavbarPage extends Component {

 

  render() {
   
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navb " >
          <Link className="navbar-brand " to="/"><h3 className="font-weight-bold">E-Catechism</h3></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ml-auto mt-2 mr-5 mt-lg-0 " >
            <li className="nav-item pr-3">
              <Link className="nav-link links" to="/login">Login<MDBIcon icon="sign-in-alt" className=" ml-2"/></Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link links" to="/signupas">Signup<MDBIcon icon="user-plus" className=" ml-2"/></Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light subNav" >
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <Link className="nav-link links" to="/" >Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link links" to="/tourpage">Take A Tour </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link links" to="/faq">Faq </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link links" to="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarPage;