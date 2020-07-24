import React, { Component } from "react";
import TestWindow from '../TestWindow';
import { Link } from 'react-router-dom';
import { Field,   isPristine,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {renderField} from '../renderField';
import { createGroup } from '../../actions';

class Tests extends Component {
  state = {
 
    isOpen: false,
    isClicked:true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleSubmit = (groupName) => {
    this.props.createGroup(groupName)
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
        <TestWindow to="/dashboard/newGroup" label="New Group" separator= ' > ' />
        {/* <TestWindow /> */}
          <div className="container">
          <div className="jumbotron ">
           <h3>CREATE A GROUP NOW..</h3>
            <hr />
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-7 col-sm-10 ">
                <br />
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
                  <div className="input-group mb-3">
                    <label>
                      Group Name <br />
                      <Field type="text" className="form-control" name="groupName" component={renderField} />
                    </label>
                  </div>
              
                  
                  <button type="submit" className="btn btn-sm float-right btn-danger" onClick={this.handleClick} disabled={this.props.pristine}>
                    Create Group
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
  form: 'CREATE_GROUP',
  pristine: isPristine('CREATE_GROUP'),

})(Tests);

export default connect(null, { createGroup })(formWrapped);

