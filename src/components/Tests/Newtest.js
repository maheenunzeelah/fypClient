import React, { Component } from "react";
import TestWindow from '../TestWindow';
import { Link } from 'react-router-dom';
import { Field,   isPristine,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {renderField} from '../renderField';
import { createTest } from '../../actions';

class Tests extends Component {
  state = {
 
    isOpen: false,
    isClicked:true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleSubmit = (testName) => {
    this.props.createTest(testName)
  }
  handleClick=(e)=>{
   
   this.setState({
     isClicked:false
   })
  }
  render() {
    console.log("hello")
    return (
      <div>
    

        {/* <link rel="stylesheet" type="text/css" href="New_test.css" /> */}
        {/* main page container */}
        <TestWindow to="/dashboard/newTest" label="New Test" separator= ' > ' />
        {/* <TestWindow /> */}
          <div className="container">
          <div className="jumbotron ">
           <h3>CREATE A TEST NOW..</h3>
            <hr />
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-7 col-sm-10 ">
                <br />
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
                  <div className="input-group mb-3">
                    <label>
                      Test Name <br />
                      <Field type="text" className="form-control" name="testName" component={renderField} />
                    </label>
                  </div>
                  <label>
                    Course
            <Field type="text" name="course" component={renderField} />

                  </label><br />
                  <Link to="/dashboard/addQues" ><button className="btn btn-sm float-right btn-danger" disabled={this.state.isClicked}>
                    Start Adding Questions
            </button></Link>
                  <button type="submit" className="btn btn-sm float-right btn-danger" onClick={this.handleClick} disabled={this.props.pristine}>
                    Save
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

const formWrapped = reduxForm({
  form: 'CREATE_TESTS',
  pristine: isPristine('CREATE_TESTS'),

})(Tests);

export default connect(null, { createTest })(formWrapped);

