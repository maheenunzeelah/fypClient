import React,{Component} from 'react'
import  '../css/Test.css'
import { Link , withRouter } from 'react-router-dom' 
import Buttontest from './Buttontest';
import Tab from './Tab.js'
import TestWindow from './TestWindow';
import {connect} from 'react-redux';
import {fetchTests} from '../actions'


class Test extends Component{
 componentDidMount(){
   this.props.fetchTests();
 }

 renderList=()=>{
     
     
     console.log(this.props.tests)
  
      return this.props.tests.map(test=>{
        return test.map((test,index)=>{
          return(
            <div className="container" >
            {/* {`#${test._id}`} */}
            
            <button  class="collapsible Test1" id={`#${test._id}`} data-toggle="collapse" data-target="#demo">{test.testName}</button>
                {console.log(test._id)}
            <div id="demo" class="w3-container collapse">
              <p>Assigned 1 time:</p>
              <hr/>
                <div className="w3-row">
                    <div className="w3-half">
                    <p><i class="fa fa-users fa-2x "  aria-hidden="true"></i> arisha</p>
                    </div>
                    <div className="w3-right">
                    <Link to='/setting' id="Setting">Settings</Link>
                    <Link to='/setting' id="Preview">Preview</Link>
                    <Link to='/setting' class="w3-btn w3-ripple w3-teal">Result</Link>
                    </div>
                </div>
                <hr/>
        
              <div className="w3-row" id="Links">
                <span className="Link"><i class="fa fa-pencil" aria-hidden="true"></i><Link to='/Edit' class="w3-btn" >Edit </Link></span>
                <span className="Link"><i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Assign' class="w3-btn" >Assign </Link></span>
                <span className="Link"><i class="fa fa-signal" aria-hidden="true"></i>
                 <button  class="w3-btn dropdown-toggle" data-toggle="dropdown">
                          Statistics
                        </button>
                        <div class="dropdown-menu">
                         
                        <Link to='/Assign' class="dropdown-item" href="">By Group</Link>
                        <Link to='/Assign' class="dropdown-item" href="#">By Questions</Link>
                         
                        </div>
                </span>
                 
              </div>
            </div>
           <br/>
           </div>)
        })
        ;

    })
 }
 
  render(){
    console.log(this.props.tests,'propssss')
    return(
    <div className="container">
      <TestWindow />
    <div class="jumbotron vertical-center"> 

<Tab></Tab>
<br></br>

   <div className="container">
   <div id="Test" class="w3-container w3-white w3-padding-16 ">
      <br/>
      
      <div class="w3-row-padding" >

      <div class="w3-quarter">   
      <Buttontest />
      </div>
        
      <div class="w3-quarter">   
      <input class="w3-input w3-border" type="text" placeholder=" Search test name"></input>
      </div>
        
      <div class="w3-quarter">  
      <select class="w3-input w3-border" placeholder="Category Filter">
      <option>-All-</option>
      <option>generic</option>
      </select>
      </div>
          
      <div class="w3-quarter w3-right" >
      <Link to='/newTest' class="w3-button w3-dark-grey">New Test +</Link></div>
    </div>
    
    <br/>

{this.renderList()}


   {/* <div className="container">
    
    <button  class="collapsible" id="Test1" data-toggle="collapse" data-target="#demo2">Test Two</button>
        
    <div id="demo2" class="w3-container collapse">
      <p>Assigned 1 time:</p>
      <hr/>
        <div className="w3-row">
            <div className="w3-half">
            <p><i class="fa fa-users fa-2x" aria-hidden="true"></i> arisha</p>
            </div>
            <div className="w3-right">
            <Link to='/setting' id="Setting">Settings</Link>
            <Link to='/setting' id="Preview">Preview</Link>
            <Link to='/setting' class="w3-btn w3-ripple w3-teal">Result</Link>
            </div>
        </div>
        <hr/>

      <div className="w3-row" id="Assign">
         <i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Assign' class="w3-btn" >Assign</Link>
      </div>
    </div>
   <br/>
   </div>

   <div className="container">
    
    <button  class="collapsible" id="Test1" data-toggle="collapse" data-target="#demo3">Test Three</button>
        
    <div id="demo3" class="w3-container collapse">
      <p>Assigned 1 time:</p>
      <hr/>
        <div className="w3-row">
            <div className="w3-half">
            <p><i class="fa fa-users fa-2x" aria-hidden="true"></i> Izma</p>
            </div>
            <div className="w3-right">
            <Link to='/setting' id="Setting">Settings</Link>
            <Link to='/setting' id="Preview">Preview</Link>
            <Link to='/setting' class="w3-btn w3-ripple w3-teal">Result</Link>
            </div>
        </div>
        <hr/>

      <div className="w3-row" id="Assign">
         <i class="fa fa-plus-circle" aria-hidden="true"></i><Link to='/Assign' class="w3-btn" >Assign</Link>
      </div>
    </div>
   <br/>
   </div>
   */}
      </div>
        
        </div>

  


</div>
</div>
);
}
}

const mapStateToProps=(state)=>{
  console.log(state.tests.testName)
  return{
   
  tests:Object.values(state.tests)
  }
}
export default connect(mapStateToProps,{fetchTests})(Test);
