import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../../css/New_group.css'
class NewGroup extends Component {
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
 
  {/* main page container */}
  
  <div className="jumbotron vertical-center">
    <div className="container" id="main">
      <div className="row">
        <div className="col-lg-8 col-xl-8 col-md-6 col-sm-6 col-5">
          <h6>
            <a href="#">
              {" "}
              <strong> Groups </strong>{" "}
            </a>{" "}
            &gt; New Group
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
                <span className="input-group-text">Group Name</span>
              </div>
              <input type="text" className="form-control" />
            </div>
            <br/>
            <Link to="/editTest"><button type="button" className="btn btn-danger">
              Create Group
            </button></Link>
          </form>
        </div>
      </div>

      <br />
      <hr/>
      

      <div className="row">
        <div  id="info">
          <br/>
          <p><strong>About Groups:</strong></p>
          <br/>
          <p> Registered Group Users will log in via the ClassMarker.com </p>
          <p> homepage where they can easily take the Tests you have </p>
          <p> assigned to their Group/s. </p>
          <p> If you prefer to give Tests without the need to pre-register </p>
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

export default NewGroup;