import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import Buttontest from './Buttontest';
import Tab from '../Tab.js';
import { isEmpty } from '../../validation/is-empty';
import TestWindow from '../TestWindow';
import { connect } from 'react-redux';
import { fetchTests, fetchCourseList, editGroup, profileLoading } from '../../actions';
import Newtest from './Newtest';
import AddQues from '../Questions/AddQues';
import EditTest from './EditTest';
import QuestionBank from '../Questions/QuestionBank';
import Spinner from '../Spinner';
import { stat } from 'fs';
let filteredTests = {};

class Test extends Component {

  state = {
    search: '',
    filteredTests: {},
    course: '',
    loading: this.props.loading,
 
  }

  componentDidMount() {

    this.props.fetchTests(1);
    this.props.fetchCourseList();
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.loading !== this.state.loading) {
      this.setState({ loading: nextProps.loading });
    }
  }
  updateSearch = (e) => {
    this.setState({
      search: e.target.value.toLowerCase()
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
      <section className="pagin mb-5" style={{ color: "#1f3c88" }}>
        {test.currentPage != 1 && test.previousPage != 1 ? <a onClick={() => this.props.fetchTests(1, this.state.course)}>1</a> : null}
        {test.hasPreviousPage ? <a onClick={() => this.props.fetchTests(test.previousPage, this.state.course)}>{test.previousPage}</a> : null}
        <a onClick={() => this.props.fetchTests(test.currentPage, this.state.course)}>{test.currentPage}</a>

        {test.hasNextPage ? <a onClick={() => this.props.fetchTests(test.nextPage, this.state.course)}>{test.nextPage}</a> : null}
        {(test.lastPage != test.currentPage && test.nextPage != test.lastPage) ? <span >...<a onClick={() => this.props.fetchTests(test.lastPage, this.state.course)}>{test.lastPage}</a></span> : null
        }

      </section>
    )

  }

  filteredList = (test, index) => {
   let assigned=0;
    return (

      <div className="container">
        {/*  */}

        <button className="collapsible btn btn-outline-black" style={{ textAlign: 'left', backgroundColor: '#fff0fb', textTransform: 'lowercase', fontSize: '16px' }} id={`#${test._id}`} data-toggle="collapse" data-target={`#demo${test._id}`}>{test.testName}
         <span className=" ml-5" style={{textTransform:'uppercase', fontSize:'12px'}}>{test.course}</span>
         <span className=" ml-5 blue-text" style={{textTransform:'uppercase', fontSize:'13px'}}>{` ${test.grp.length} groups assigned`}</span>
          <span className="Link float-right" ><i class="fa fa-pencil" aria-hidden="true"></i>
            {/*Edit Test button*/}
            <Link to={{ pathname: '/dashboard/editTest', state: { testName: test.testName, course: test.course, id: test._id } }} className="w3-btn blue-text font-weight-bold"  >Edit </Link></span>
        </button>
        {console.log(test._id)}
        {isEmpty(test.grp) ? <div></div> :test.grp.map(gr => {
     
          return ( <div id={`demo${test._id}`} className="w3-container collapse black-text ">

            <hr />
            <div className="w3-row">
              <div className="w3-half">
                <p style={{ fontSize: '15px' }}><i className="fa fa-users fa-2x mr-3" aria-hidden="true"></i>{gr.groupId.groupName} </p>
              </div>


              <div className="w3-right ">
                <Link to={`/dashboard/settings/${gr.groupId._id}`} className="blue-text" id="Setting">Settings</Link>
                <Link to='/dashboard/preview' className="blue-text" id="Preview">Preview</Link>
                <Link to='/setting' className="w3-btn w3-ripple pink accent-3">Result</Link>
              </div>
            </div>
            <hr />

            <div className="w3-row" id="Links">


              {/*Assign Test button*/}
              <span className="Link blue-text"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to={{pathname:'/dashboard/editGroup',state: { name: gr.groupId.groupName, groupId: gr.groupId._id }}} className="w3-btn blue-text "
                onClick={({ gr_id }) => this.props.editGroup(gr.groupId._id)} >Assign </Link></span>



            </div>

          </div>)
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
        return (tes.testName.toLowerCase().indexOf(this.state.search) !== -1)
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
      this.state.loading.loading ? <Spinner /> :
        <div className="container">
          <div ><TestWindow /></div>
          <div>

            <Tab></Tab>
            <br></br>

            <div className="container" >
              <div id="Test" class="w3-container w3-padding-16 " style={{ backgroundColor: "#fff0fb" }} >
                <br />

                <div class="w3-row-padding"  >

                  <div class="w3-quarter">
                    <input class="w3-input w3-border" type="text" placeholder=" Search test name" value={this.state.search} onChange={this.updateSearch}></input>
                  </div>

                  <div className="w3-quarter">

                    <select className="w3-input w3-border" placeholder="Category Filter" id='courseOpt' onChange={this.handleChange}>
                    <option value=''></option>
                      <option value=''>All </option>
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
    courses: state.filter.course,
    loading: state.loading
  }
  // const mapDispatchToProps=(dispatch)=>{
  //     return{
  //       loading:()=>dispatch(profileLoading())
  //     }
  // }
}
export default connect(mapStateToProps, { fetchTests, fetchCourseList, editGroup, profileLoading })(Test);
