import React, { Component } from "react";
import { MDBNavbar,MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBIcon, MDBBtn , MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

class Dashboard extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
     handleClick=(e)=>{
      localStorage.removeItem('jwtToken');
      window.location='http://localhost:3000/login';
  }
    
    render() {
        return(
            <MDBNavbar color="black" dark expand="md">
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBDropdown>
                    <MDBDropdownToggle caret color="dark">
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
                    <MDBDropdownToggle caret color="dark">
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
                 <MDBBtn href="#" className="mr-auto grey darken-4"  color="dark" basic>My Account</MDBBtn>
                <MDBBtn className="mr-auto grey darken-4"><MDBIcon className="text-white" icon="search" /></MDBBtn>
                <MDBBtn href="#" className="mr-auto grey darken-4"  color="dark" basic onClick={this.handleClick}>Log out</MDBBtn>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
  );
        }
    }
  
    export default Dashboard;