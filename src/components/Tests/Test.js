import React, { Component } from 'react'
import '../../css/Test.css'
import { BrowserRouter, HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import Buttontest from './Buttontest';
import Tab from '../Tab.js'
import TestWindow from '../TestWindow';
import { connect } from 'react-redux';
import { fetchTests, fetchCourseList,editGroup } from '../../actions';
import Newtest from './Newtest';
import AddQues from '../Questions/AddQues';
import EditTest from './EditTest';
import QuestionBank from '../Questions/QuestionBank';
let filteredTests = {};

class Test extends Component {

  state = {
    search: '',
    filteredTests: {},
    course: ''
  }

  componentDidMount() {
    this.props.fetchTests(1);
    this.props.fetchCourseList();
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleChange = () => {
    let sel = document.getElementById('courseOpt');

    let sv = sel.options[sel.selectedIndex].value;
    // setting that number in state
    this.setState({
      course: sv
    }, () => this.props.fetchTests(1, this.state.course))

  }
  DynamicButtons = () => {
    return this.props.tests.map(test =>
      <section className="pagin">
        {test.currentPage != 1 && test.previousPage != 1 ? <a className="white-text" onClick={() => this.props.fetchTests(1, this.state.course)}>1</a> : null}
        {test.hasPreviousPage ? <a className="white-text" onClick={() => this.props.fetchTests(test.previousPage, this.state.course)}>{test.previousPage}</a> : null}
        <a className="white-text" onClick={() => this.props.fetchTests(test.currentPage, this.state.course)}>{test.currentPage}</a>

        {test.hasNextPage ? <a className="white-text" onClick={() => this.props.fetchTests(test.nextPage, this.state.course)}>{test.nextPage}</a> : null}
        {(test.lastPage != test.currentPage && test.nextPage != test.lastPage) ? <span className="white-text">...<a className="white-text" onClick={() => this.props.fetchTests(test.lastPage, this.state.course)}>{test.lastPage}</a></span> : null
        }

      </section>
    )

  }

  filteredList = (test, index) => {

    return (
      <div className="container">
        {/*  */}

        <button  className="collapsible btn btn-outline-black" style={{textAlign:'left', backgroundColor:'#fff0fb', textTransform:'lowercase', fontSize:'16px'}} id={`#${test._id}`} data-toggle="collapse" data-target={`#demo${test._id}`}>{test.testName}</button>
        {console.log(test._id)}
        {test.grp.map(gr => {
          return <div id={`demo${test._id}`} className="w3-container collapse black-text ">
          
            <hr />
            <div className="w3-row">
              <div className="w3-half">
                <p style={{fontSize:'15px'}}><i className="fa fa-users fa-2x mr-3" aria-hidden="true"></i>{gr.groupId.groupName} </p>
              </div>


              <div className="w3-right ">
                <Link to='/setting' className="blue-text" id="Setting">Settings</Link>
                <Link to='/setting' className="blue-text" id="Preview">Preview</Link>
                <Link to='/setting' className="w3-btn w3-ripple pink accent-3">Result</Link>
              </div>
            </div>
            <hr />

            <div className="w3-row" id="Links">
              <span className="Link" ><i class="fa fa-pencil" aria-hidden="true"></i>

                {/*Edit Test button*/}
                <Link to={{ pathname: '/dashboard/editTest', state: { testName: test.testName, course: test.course, id: test._id } }} className="w3-btn blue-text font-weight-bold"  >Edit </Link></span>

              {/*Assign Test button*/}
              <span className="Link blue-text"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/dashboard/editGroup' className="w3-btn blue-text " 
              onClick={({gr_id})=>this.props.editGroup(gr.groupId._id)} >Assign </Link></span>



            </div>

          </div>
        })}
        <br />
      </div>
    )
  }
  renderList = () => {
    let filtered
    this.props.tests.filter(test => {
      filtered = test.groups.filter(tes => {
        //If value in searched bar matches the value of testname
        return (tes.testName.indexOf(this.state.search) !== -1)
      })

    })

    // When component will render first time
    if (filtered == undefined) {

      return this.props.tests.map(test => {
        return test.groups.map((test, index) => {
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
  categoryList = () => {

  }
  render() {

    let isTest

    return (
      <div className="container">
        <div ><TestWindow /></div>
        <div>

          <Tab></Tab>
          <br></br>

          <div className="container" >
            <div id="Test" class="w3-container w3-padding-16 " style={{backgroundColor:"#fff0fb"}} >
              <br />

              <div class="w3-row-padding"  >

                <div class="w3-quarter">
                  <input class="w3-input w3-border" type="text" placeholder=" Search test name" value={this.state.search} onChange={this.updateSearch}></input>
                </div>

                <div className="w3-quarter">

                  <select className="w3-input w3-border" placeholder="Category Filter" id='courseOpt' onChange={this.handleChange}>
                    <option value=''>-All-</option>
                    {this.props.courses != undefined ? this.props.courses.map(category => {
                      return <option value={category}>{category}</option>
                    }) : null
                    }
                  </select>

                </div>

                <div className="w3-quarter w3-right" >
                  <Link to='/dashboard/newTest' className="btn btn-primary">New Test +</Link></div>
              </div>

              <br />

              {this.renderList()}


            </div>

          </div>
          {this.props.tests.map(test => {
            isTest = test.groups.length > 0
          })}

          {isTest ? this.DynamicButtons() : null}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.tests.tests)
  return {
    tests: Object.values(state.tests),
    courses: state.filter.course
  }
}
export default connect(mapStateToProps, { fetchTests, fetchCourseList ,editGroup})(Test);
