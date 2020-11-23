import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../css/footer.css';
import Pdf from '../../images/USER_GUIDE.pdf';

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
            <h3 className="font-weight-bold">E-Catechism</h3>
            <p>
             Makes it easy for you to assess students and reduces your workload
            </p>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled footLink">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled ">
                <Link to="/tourpage">Take A Tour</Link>
                 <ul>
                   <li className="footLink">
                   <Link to="/tourpage"> Overview</Link>
                   </li>
                   <li className="footLink">
                     <Link to="/quizSettings">Quiz Settings</Link>
                   </li>
                 </ul>
              </li>
              <li className="list-unstyled footLink">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="list-unstyled footLink">
                <a href={Pdf} target="_blank">User manual </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              
              <li className="list-unstyled footLink">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="list-unstyled  mt-3 footLink">
                <Link to="/signupas" className=" reg">Register Now</Link>
              </li>
            </ul>
          </MDBCol>
       
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="/"> E-Catechism </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
}

export default FooterPage;