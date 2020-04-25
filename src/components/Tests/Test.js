import React, { Component } from 'react'
import '../../css/Test.css'
import { BrowserRouter, HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import Buttontest from './Buttontest';
import Tab from '../Tab.js'
import TestWindow from '../TestWindow';
import { connect } from 'react-redux';
import { fetchTests } from '../../actions';
import Newtest from './Newtest';
import AddQues from '../Questions/AddQues';
import EditTest from './EditTest';
import QuestionBank from '../Questions/QuestionBank';
let filteredTests = {};

class Test extends Component {

  state = {
    search: '',
    filteredTests: {}
  }

  componentDidMount() {
    this.props.fetchTests();

  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  filteredList = (test, index) => {
    return (
      <div className="container">
        {/*  */}

        <button className="blue lighten-3 Test1" id={`#${test._id}`} data-toggle="collapse" data-target={`#demo${test._id}`}>{test.testName}</button>
        {console.log(test._id)}
        <div id={`demo${test._id}`} className="w3-container collapse black-text ">
          <p >Assigned 1 time:</p>
          <hr />
          <div className="w3-row">
            <div className="w3-half">
              <p ><i className="fa fa-users fa-2x" aria-hidden="true"></i> arisha</p>
            </div>
            <div className="w3-right">
              <Link to='/setting' id="Setting">Settings</Link>
              <Link to='/setting' id="Preview">Preview</Link>
              <Link to='/setting' class="w3-btn w3-ripple pink accent-3">Result</Link>
            </div>
          </div>
          <hr />

          <div className="w3-row" id="Links">
            <span className="Link" ><i class="fa fa-pencil" aria-hidden="true"></i>
             
             {/*Edit Test button*/}
              <Link to={{ pathname: '/dashboard/editTest', state: { testName: test.testName, course: test.course, id: test._id } }} className="w3-btn deep-orange-text font-weight-bold"  >Edit </Link></span>

            {/*Assign Test button*/}
            <span className="Link"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Assign' className="w3-btn deep-orange-text " >Assign </Link></span>

             {/*Statistics button*/}
            <span className="Link"><i class="fa fa-signal" aria-hidden="true"></i>
              <button className="w3-btn  deep-orange-text  dropdown-toggle" data-toggle="dropdown">
                Statistics
                  </button>
              <div class="dropdown-menu">

                <Link to='/Assign' class="dropdown-item" href="">By Group</Link>
                <Link to='/Assign' class="dropdown-item" href="#">By Questions</Link>

              </div>
            </span>

          </div>
        </div>
        <br />
      </div>
    )
  }
  renderList = () => {
    let filtered
    this.props.tests.filter(test => {
      filtered = test.filter(tes => {
        //If value in searched bar matches the value of testname
        return (tes.testName.indexOf(this.state.search) !== -1)
      })

    })
    
    // When component will render first time
    if (filtered == undefined) {

      return this.props.tests.map(test => {
        return test.map((test, index) => {
          return <div>
            {/* For preventing code replication function is called*/}
            {this.filteredList(test, index)}
          </div>
        })
          ;

      })
    }
    // When we have list of filtered arry
    else {
      return filtered.map((test, index) => {
        return <div>
          {this.filteredList(test, index)}
        </div>
      })
        ;


    }
  }

  render() {
    return (
      <div className="container">
        <div ><TestWindow /></div>
        <div className="jumbotron vertical-center black " style={{border:"3px solid #42a5f5"}}>

          <Tab></Tab>
          <br></br>

          <div className="container" >
            <div id="Test" class="w3-container  w3-padding-16 blue lighten-4" >
              <br />

              <div class="w3-row-padding"  >

                <div class="w3-quarter">
                  <Buttontest />
                </div>

                <div class="w3-quarter">
                  <input class="w3-input w3-border" type="text" placeholder=" Search test name" value={this.state.search} onChange={this.updateSearch}></input>
                </div>

                <div class="w3-quarter">
                  <select class="w3-input w3-border" placeholder="Category Filter">
                    <option>-All-</option>
                    <option>generic</option>
                  </select>
                </div>

                <div class="w3-quarter w3-right" >
                  <Link to='/dashboard/newTest' class="w3-button w3-dark-grey">New Test +</Link></div>
              </div>

              <br />

              {this.renderList()}


            </div>

          </div>




        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.tests.testName)
  return {

    tests: Object.values(state.tests)
  }
}
export default connect(mapStateToProps, { fetchTests })(Test);
