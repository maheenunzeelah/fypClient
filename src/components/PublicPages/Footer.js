import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../css/footer.css';

class FooterPage extends Component {
 
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
  return (
    <MDBFooter className="main_div "  style={{backgroundColor:'#c56183 '}} >
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sitemap</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">User manual / Screenshots</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Language Support</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Test Maker</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Register</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
}

export default FooterPage;