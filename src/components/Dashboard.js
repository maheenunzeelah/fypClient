import React, { Component } from "react";
import { MDBNavbar, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,MDBNavLink,MDBNavItem, MDBTable, MDBTableBody, MDBTableHead,MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from './../actions';
import Spinner from './Spinner';

class Dashboard extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render() {

    const { isAuthenticatedTeacher, isAuthenticatedStudent, user} = this.props.auth;
   
   if (isAuthenticatedTeacher) {
      return (
        <MDBNavbar style={{ backgroundColor: "#d9adad" }} dark expand="md">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBDropdown>
                <MDBDropdownToggle caret color="black">
                  Dashboard
                    </MDBDropdownToggle>
                <MDBDropdownMenu color="dark" basic>
                  <MDBTable borderless>
                    <MDBTableHead>
                      <tr>
                        <th><MDBDropdownItem><u>Recent Results</u></MDBDropdownItem></th>
                        <th><MDBDropdownItem>Tests</MDBDropdownItem></th>
                        <th><MDBDropdownItem>Groups</MDBDropdownItem></th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td><MDBDropdownItem>By Test</MDBDropdownItem></td>
                        <td><MDBDropdownItem>Question Bank</MDBDropdownItem></td>
                        <td><MDBDropdownItem>Export</MDBDropdownItem></td>
                      </tr>
                      <tr>
                        <td><MDBDropdownItem>By Group</MDBDropdownItem></td>
                        <td><MDBDropdownItem>Categories</MDBDropdownItem></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><MDBDropdownItem>Files</MDBDropdownItem></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><MDBDropdownItem>Certificates</MDBDropdownItem></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th><MDBDropdownItem><u>Statistics</u></MDBDropdownItem></th>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><MDBDropdownItem>By Test</MDBDropdownItem></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><MDBDropdownItem>By Group</MDBDropdownItem></td>
                        <td><MDBDropdownItem><a class="red-text">New Test+</a></MDBDropdownItem></td>
                        <td><MDBDropdownItem><a class="red-text">New Group+</a></MDBDropdownItem></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle caret color="black">
                  Help
                    </MDBDropdownToggle>
                <MDBDropdownMenu color="dark" basic>
                  <MDBDropdownItem>User Manual</MDBDropdownItem>
                  <MDBDropdownItem>FAQ</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Contact Us</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              {/* <MDBDropdown>
                    <MDBDropdownToggle caret color="dark">
                        My Account
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="dark" basic>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown> */}
              <MDBBtn className="mr-auto " color="black" basic>My Account</MDBBtn>
              <MDBBtn className="mr-auto " color="black"><MDBIcon className="text-white" icon="search" /></MDBBtn>
              <MDBBtn className="mr-auto " color="black" basic onClick={this.handleClick}>Log out</MDBBtn>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      );
    }
    else if (isAuthenticatedStudent) {
      return (
        <Router>
        <MDBNavbar className="blue lighten-4 pink-text"  expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarBrand>
            <strong><h3 className="font-weight-bold">E-Catechism</h3></strong>
          </MDBNavbarBrand>
          
          <MDBNavbarNav right>
           
            <MDBBtn className="mr-auto " color="pink" basic>My Account</MDBBtn>
            
            <MDBBtn className="mr-auto " color="pink" basic onClick={this.handleClick}>Log out</MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>  
        <MDBNavbar style={{ backgroundColor: "rgb(47, 156, 181)" }} dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
      
          <MDBNavbarNav left>
          <a href="/student"><MDBBtn className="mr-auto" color="pink" >Tests</MDBBtn></a>
          <a href="#"><MDBBtn className="mr-auto"  color="pink"  disabled>Group</MDBBtn></a>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
      </Router>
      )
    }
  }
}
Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {

  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Dashboard);