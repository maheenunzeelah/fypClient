import React, { Component } from 'react'
import '../css/Test.css'
import { BrowserRouter, HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import Buttontest from './Buttontest';
import Tab from './Tab.js'
import TestWindow from './TestWindow';
import { connect } from 'react-redux';
import { fetchTests } from '../actions';
import Newtest from './Newtest';
import AddQues from './AddQues';
import EditTest from './EditTest';
import QuestionBank from './QuestionBank';
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

        <button className="collapsible Test1" id={`#${test._id}`} data-toggle="collapse" data-target={`#demo${test._id}`}>{test.testName}</button>
        {console.log(test._id)}
        <div id={`demo${test._id}`} class="w3-container collapse">
          <p>Assigned 1 time:</p>
          <hr />
          <div className="w3-row">
            <div className="w3-half">
              <p><i class="fa fa-users fa-2x " aria-hidden="true"></i> arisha</p>
            </div>
            <div className="w3-right">
              <Link to='/setting' id="Setting">Settings</Link>
              <Link to='/setting' id="Preview">Preview</Link>
              <Link to='/setting' class="w3-btn w3-ripple w3-teal">Result</Link>
            </div>
          </div>
          <hr />

          <div className="w3-row" id="Links">
            <span className="Link"><i class="fa fa-pencil" aria-hidden="true"></i>
              <Link to={{ pathname: '/dashboard/editTest', state: { testName: test.testName, course: test.course, id: test._id } }} className="w3-btn"  >Edit </Link></span>
            {/*  */}
            <span className="Link"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Assign' class="w3-btn" >Assign </Link></span>
            <span className="Link"><i class="fa fa-signal" aria-hidden="true"></i>
              <button class="w3-btn dropdown-toggle" data-toggle="dropdown">
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
        return (tes.testName.indexOf(this.state.search) !== -1)
      })

    })

    if (filtered == undefined) {

      return this.props.tests.map(test => {
        return test.map((test, index) => {
          return <div>
            {this.filteredList(test, index)}
          </div>
        })
          ;

      })
    }
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
        <div class="jumbotron vertical-center">

          <Tab></Tab>
          <br></br>

          <div className="container" >
            <div id="Test" class="w3-container  w3-padding-16 " >
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
