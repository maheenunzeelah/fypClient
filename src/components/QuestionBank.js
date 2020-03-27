import React , {Component} from 'react'
import  '../css/QuestionBank.css'
import Button from './Button.js'
import Tab from './Tab.js'
import TestWindow from './TestWindow';
import { Link , withRouter } from 'react-router-dom' ;

import {connect} from 'react-redux';
import {fetchQues} from '../actions';

 class QuestionBank extends Component{
  handleClick=(e)=>{
          console.log(e.target.href)
          
  }       
 componentDidMount(){
         this.props.fetchQues();
 }
 renderList=()=>{
         console.log(this.props.ques)
        return this.props.ques.map(que=>{
                return que.map(((qu,index)=>{
                        console.log(qu)
                        return(
         
         <div>     
        <div  id="Qheading">
        <span> Question {index+1}</span>
       
            <ul class="float-right">
            <li>Generic</li>
            <li>1 pt</li>
        </ul>
        
        
     </div>
 
     <br></br>
     <br></br>
 
     <div id="Question">
   
         <p>{qu.question}</p>
         <br></br>
      <div id={`demo${qu._id}`} class="container collapse">

    {qu.type==="MCQs"?(
         <ol  id="ansoptions">
 
             <li>{qu.answer1}</li>
             <li>{qu.answer2}</li>
             <li>{qu.answer3}</li>
 
         </ol>):(
          <ul>
            <div>Correct Ans is</div><br />   
            <li>{qu.answer}</li>
          </ul>    
         )}
         <br></br>
         <hr></hr>
 
         <div class="container" >
 
 
         <br></br>
         <div class="row">
  
             <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5" >
               <strong>Question Type:</strong>
             </div>
 
             <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                     <p>{qu.type}</p>
             </div>
        
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>Category</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>Generic</p>
                 </div>
            
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>points</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>1</p>
                 </div>
            
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>Randomize Answers:</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>Yes</p>
                 </div>
            
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>Date Added:</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>Mon 30th Sep 2019</p>
                 </div>
            
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>Last Modified:</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>N/A</p>
                 </div>
            
             </div>
         </div>
     
         </div>
 
         <hr></hr>
 
         <ul id="options" class="col-lg-9 col-xl-9 col-md-10 col-sm-12 col-12">
                 <li id="firstitem collapsible" ><a href={`#demo${qu._id}`} data-toggle="collapse" onClick={this.handleClick}><i class="fa fa-expand " aria-hidden="true"></i>Answers</a></li>
                 <li><a href ><i class="fa fa-pencil" aria-hidden="true"></i>Edit</a></li>
                 <li><a  href><i class="fa fa-files-o" aria-hidden="true"></i>Duplicate</a></li>
                 <li><a  href><i class="fa fa-share" aria-hidden="true"></i>Used In</a></li>
                 <li><a  href><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</a></li>
 
             </ul>
   <br></br>
   <br></br>
     </div>
     </div> )
       }))
}) 
 }
        render(){
    return(<div className="container">
    <TestWindow to="/QuestionBank" label="Question Bank" separator=" > "/>
            
    <div class="jumbotron vertical-center "> 

<Tab></Tab>
<br></br>

<div className="container" >
    <div className="w3-container w3-padding-16  w3-white " id="QuestionBank">
        
            <h5><strong>Filters:</strong></h5>
           <br></br>

            <div class="w3-row-padding">
                <div class="w3-quarter">
                        <label>Status</label>  
                        <select class="w3-input w3-border">
                                <option> All</option>
                                <option> Used</option>
                                <option> Unused</option>
                        </select>
                </div>
                
                <div class="w3-quarter">  
                        <label> Question Type  </label>
                        <select class="w3-input w3-border">
                                <option> Multiple Choice</option>
                                <option> Multiple Response</option>
                                <option> True/False</option>
                        </select>
                </div>
                        

                        <div class="w3-quarter">  
                                <label>Category  </label>
                                <select class="w3-input w3-border">
                                <option> All</option>
                                <option> Generic</option>
                                </select>
                        </div>

                        <div class="w3-quarter">  
                                <label>Search  </label>
                                <input class="w3-input w3-border" type="text" ></input>
                        </div>

                        <div class="w3-third" >
                                <br></br>
                        <button class="w3-button w3-dark-grey" id="btn">Go</button>
                        </div>
                
          </div>

   </div>
<br></br>
 
   <div class="w3-container w3-padding-16  w3-white" id="Questions">

        
    <div class="row ">
        <div class="col-xl-7 col-lg-7 col-md-6 col-sm-5 col-6">
                <Button></Button >
        </div>

        <div class="col-xl-3  col-lg-3 col-md-3 col-sm-4 col-5">
                <div class="dropdown">
                <button  class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        Add Questions
                </button>

                <div class="dropdown-menu">
                        <Link to='#' class="dropdown-item" href>Add new</Link>
                        <Link to='#' href class="dropdown-item" >Import new</Link> 
                </div>
                </div>
        </div>

            

        <div class="dropdown col-xl-2
         col-lg-2 col-md-1 col-sm-1 col-1 d-none d-lg-block d-xl-block d-md-block d-sm-block">
               <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  More
                </button>
                <div class="dropdown-menu">
                 
                    <a class="dropdown-item" href="">Edit Question Setting</a>
                  <a class="dropdown-item" href="#">Export Questions</a>
                 
                </div>
              </div>
            

            </div>
            <br></br>
            <br></br>
            

    
<div class="container">
    


   {this.renderList()}
     
    <br></br>
    <br></br>     
   </div>
</div>
</div>
</div>
</div>)
  
}}
const mapStateToProps=(state)=>{
        console.log(state.questions.question)
        return{
                ques:Object.values(state.questions)
}
}

export default connect(mapStateToProps,{fetchQues})(QuestionBank);
