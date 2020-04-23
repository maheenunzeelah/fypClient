import React , {Component} from 'react'
import  '../css/QuestionBank.css'
import Button from './Button.js'
import Tab from './Tab.js'
import TestWindow from './TestWindow';
import { Link , withRouter } from 'react-router-dom' ;

import {connect} from 'react-redux';
import {fetchQues} from '../actions';

let corrAnsStyle=""
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
        <div className="blue lighten-5" id="Qheading">
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
         {qu.answers.filter(answer=>
         {      
                 return Object.values(answer)==qu.corr.map(corr=> corr)
                        
        //    return<div>
        //              {qu.corr.map(corr=>{

        //                      corr===Object.values(answer)?(corrAnsStyle="info-color"):(corrAnsStyle="info-text")
        //              })}
        //            <li className={corrAnsStyle}>{Object.values(answer)}</li>
        //            </div>
         })
        }
 
         </ol>):(
          <ul>
            <div style={{textAlign:"left"}}>Correct Ans is</div><br />   
            <li style={{marginLeft:"20px" , textTransform:"capitalize"}}>{qu.answer}</li>
          </ul>    
         )}
         <br></br>
         <hr></hr>
 
         <div className="container blue lighten-4 border border-primary black-text" style={{paddingBottom:"20px"}} >
 
 
         <br></br>
         <div className="row">
  
             <div className="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5" >
               <strong>Question Type:</strong>
             </div>
 
             <div className="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
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
                         <p>{qu.created_at}</p>
                 </div>
            
         </div>
 
         <div class="row">
  
                 <div class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-5">
                   <p>Last Modified:</p>
                 </div>
     
                 <div class="col-lg-4 col-xl-4 col-md-6 col-sm-8 col-6">
                         <p>{qu.updated_at}</p>
                 </div>
            
             </div>
         </div>
     
         </div>
 
         <hr></hr>
 
         <ul id="options" className="col-lg-9 col-xl-9 col-md-10 col-sm-12 col-12">
                 <li><a href={`#demo${qu._id}`} data-toggle="collapse" className="text-primary font-weight-bold"><i className="fa fa-expand " aria-hidden="true"></i>Answers</a></li>
                 <li ><a href className="text-primary font-weight-bold"><i className="fa fa-pencil " aria-hidden="true"></i>Edit</a></li>
                 <li><a href className="text-primary font-weight-bold"><i className="fa fa-share" aria-hidden="true"></i>Used In</a></li>
                 <li><a href className="text-primary font-weight-bold"><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</a></li>
 
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
            
    <div className="jumbotron vertical-center pink lighten-4"> 

<Tab></Tab>
<br></br>

<div className="container"  >
    <div className="w3-container w3-padding-16 pink lighten-5" style={{color:"#1C2331"}}id="QuestionBank">
        
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
 
   <div className="w3-container w3-padding-16 pink lighten-5" id="Questions" style={{color:"#1C2331"}}>

        
    <div className="row ">
        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-5 col-6">
                <Button></Button >
        </div>

        <div className="col-xl-3  col-lg-3 col-md-3 col-sm-4 col-5">
                <div className="dropdown">
                <button  className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        Add Questions
                </button>

                <div className="dropdown-menu">
                        <Link to='/dashboard/addQues' className="dropdown-item" href>Add new</Link>
                        <Link to='#' href className="dropdown-item" >Import new</Link> 
                </div>
                </div>
        </div>

            

        <div className="dropdown col-xl-2
         col-lg-2 col-md-1 col-sm-1 col-1 d-none d-lg-block d-xl-block d-md-block d-sm-block">
               <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  More
                </button>
                <div className="dropdown-menu">
                 
                    <a className="dropdown-item" href="">Edit Question Setting</a>
                  <a className="dropdown-item" href="#">Export Questions</a>
                 
                </div>
              </div>
            

            </div>
            <br></br>
            <br></br>
            

    
<div className="container">
    


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
