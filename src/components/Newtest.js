import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Tests extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        }
        
        render() {
          return (
                <div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" type="text/css" href="New_test.css" />
  {/* main page container */}
  <div className="jumbotron vertical-center">
    <div className="container" id="main">
      <div className="row">
        <div className="col-lg-8 col-xl-8 col-md-6 col-sm-6 col-5">
          <h6>
            <a href="#">
              {" "}
              <strong> Tests </strong>{" "}
            </a>{" "}
            &gt; New Test
          </h6>
        </div>
        {/* side links */}
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-7" id="links">
          <a href>
            <i className="fa fa-file-o fa-2x" aria-hidden="true">
              <p>Tests</p>
            </i>
          </a>
          <a href>
            <i className="fa fa-users fa-2x" aria-hidden="true">
              <p>Groups</p>
            </i>
          </a>
          <a href>
            <i className="fa fa-link fa-2x" aria-hidden="true">
              <p>Links</p>
            </i>
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-7 col-sm-10 ">
          <br />
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Test Name</span>
              </div>
              <input type="text" className="form-control" />
            </div>
            <Link to="/editTest"><button type="button" className="btn btn-danger">
              Start Adding Question
            </button></Link>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-4 col-xl-4 col-md-6  col-sm-7  col-8 " id="info">
          <p> Learn how to write great Tests. </p>
          <p>
            {" "}
            Visit: <a href>ClassMarker Learn.</a>{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



);
  }
}

export default Tests;