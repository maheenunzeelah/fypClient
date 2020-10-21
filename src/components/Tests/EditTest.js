import React, { Component } from 'react';
import TestWindow from '../TestWindow';
import { Link } from 'react-router-dom';
import { Field, isPristine, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import {renderField} from '../renderField';
import { updateTest, deleteTest, editTest } from '../../actions'

class EditTest extends Component {
  state = {
    data: {
      testId: this.props.location.state.id,
      test: this.props.location.state.testName,
      course: this.props.location.state.course
    },
    isOpen: false
  };
  componentDidMount() {
    {/*Auto filling testName and course feilds on page load*/}
    this.props.dispatch(change('EDIT_TESTS', 'testName', this.state.data.test));
    this.props.dispatch(change('EDIT_TESTS', 'course', this.state.data.course));
  }
  handleSubmit = (formValues) => {
    this.props.updateTest({ id: this.state.data.testId, ...formValues })
  }
  handleDelete = () => {
    this.props.deleteTest(this.state.data.testId)
  }
  handleClick=(id)=>{
    this.props.editTest(id)
   } 
  render() {
    console.log(this.props.location)
    return (
      <div>

        <TestWindow to="/dashboard/editTest" label="Edit Test" separator=' > ' />

        <div className="container">
          <div className="jumbotron " style={{backgroundColor:"#f8efd4"}} >
            <h3>Edit Test</h3>
            <hr />
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-7 col-sm-10 ">
                <br />
                <form className="ui form error">
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
                  <Link to="/dashboard" ><button className="btn btn-sm float-right btn-danger" onClick={this.handleClick} disabled={this.props.pristine}>
                    Cancel
            </button></Link>
                  <button className="btn btn-sm float-right btn-danger" onClick={this.handleDelete} disabled={this.props.pristine}>
                    Delete
            </button>

                    <Link to={{pathname:"/dashboard/addQues", state:{id:this.state.data.testId}}} ><button className="btn btn-sm float-right btn-danger" onClick={()=>{this.handleClick(this.state.data.testId)}}>
                    Add Questions
            </button></Link>

                  <button type="submit" className="btn btn-sm float-right btn-danger" onClick={this.props.handleSubmit(this.handleSubmit)} disabled={this.props.pristine}>
                    Update
            </button>

                </form>
              </div>
            </div>
            <br />

          </div>
        </div>
      </div>
    )
  }
}

const formWrapped = reduxForm({
  form: 'EDIT_TESTS',
  pristine: isPristine('EDIT_TESTS'),

})(EditTest);

export default connect(null, { updateTest, deleteTest,editTest })(formWrapped);