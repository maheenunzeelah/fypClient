import React, { Component } from "react";
import TestWindow from '../TestWindow';
import { Link } from 'react-router-dom';
import { Field,   isPristine,reduxForm, change} from 'redux-form';
import { connect } from 'react-redux';
import {renderField} from '../renderField';
import { updateGroup} from '../../actions';

class UpdateGroup extends Component {
  state = {
    data:{
     group:this.props.location.state.name,
     groupId:this.props.location.state.id
    },
    isOpen: false,
    isClicked:true
  };
  componentDidMount() {
    {/*Auto filling testName and course feilds on page load*/}
    this.props.dispatch(change('UPDATE_GROUP', 'groupName', this.state.data.group));
    
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleSubmit = (groupName) => {
    this.props.updateGroup({ id: this.state.data.groupId, ...groupName})
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
        <TestWindow to="/dashboard/newGroup" label="Update Group" separator= ' > ' />
        {/* <TestWindow /> */}
          <div className="container">
          <div className="jumbotron ">
           <h3>UPDATE GROUP..</h3>
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
                    Update Group
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
  form: 'UPDATE_GROUP',
  pristine: isPristine('UPDATE_GROUP'),

})(UpdateGroup);

export default connect(null, {updateGroup} )(formWrapped);

