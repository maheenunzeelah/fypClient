import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import renderField from './renderField';
import {createTest} from '../actions';

class Tests extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        }
        handleSubmit=(testName)=>{
          console.log(testName)
           this.props.createTest(testName)
        }
        render() {
          return (
                <div>
  

  <link rel="stylesheet" type="text/css" href="New_test.css" />
  {/* main page container */}
  <div className="jumbotron vertical-center">
    <div className="container" id="main">
      
      <hr />
      <div className="row">
        <div className="col-lg-5 col-xl-5 col-md-7 col-sm-10 ">
          <br />
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{height:'20px'}}>Test Name</span>
              </div>
              <Field type="text" className="form-control" name="testName" component={renderField} />
            </div>
            <button type="submit" className="btn btn-danger">
              Start Adding Question
            </button>
          </form>
        </div>
      </div>
      <br />
     
    </div>
  </div>
</div>



);
  }
}

const formWrapped= reduxForm({
  form: 'CREATE_TESTS',

  })(Tests);
  
  export default connect(null,{createTest})(formWrapped); 

//   <div className="row">
//   <div className="col-lg-8 col-xl-8 col-md-6 col-sm-6 col-5">
//   <h6>
//     <a href="#">
//       {" "}
//       <strong> Tests </strong>{" "}
//     </a>{" "}
//     &gt; New Test
//   </h6>
// </div>
// {/* side links */}
// <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-7" id="links">
//   <a href>
//     <i className="fa fa-file-o fa-2x" aria-hidden="true">
//       <p>Tests</p>
//     </i>
//   </a>
//   <a href>
//     <i className="fa fa-users fa-2x" aria-hidden="true">
//       <p>Groups</p>
//     </i>
//   </a>
//   <a href>
//     <i className="fa fa-link fa-2x" aria-hidden="true">
//       <p>Links</p>
//     </i>
//   </a>
// </div>
// </div>