import React , {Component} from 'react'
import  '../../css/QuestionBank.css'
import Button from '../Button.js'
import Tab from '../Tab.js'
import TestWindow from '../TestWindow';
import { Link , withRouter } from 'react-router-dom' ;
import {connect} from 'react-redux';
import {fetchQues,deleteQuestion,editTest} from '../../actions';

let corrAnsStyle="";
let corrAns;
 class QuestionBank extends Component{

 
 componentDidMount(){
         this.props.fetchQues(1);
 }
 handleDelete=(id)=>{
        this.props.deleteQuestion(id);
        }    
handleClick=(id)=>{
        this.props.editTest(id)
}      
DynamicButtons=()=>{
       return this.props.ques.map(que=>
                <section className="pagin">
                  {que.currentPage!=1 && que.previousPage!=1?<a className="white-text" onClick={()=>this.props.fetchQues(1)}>1</a>:null}
                  {que.hasPreviousPage?<a  className="white-text" onClick={()=>this.props.fetchQues(que.previousPage)}>{que.previousPage}</a>:null}
                   <a  className="white-text" onClick={()=>this.props.fetchQues(que.currentPage)}>{que.currentPage}</a>
                  
                   {que.hasNextPage?<a  className="white-text" onClick={()=>this.props.fetchQues(que.nextPage)}>{que.nextPage}</a>:null}
                  { (que.lastPage!=que.currentPage && que.nextPage!=que.lastPage)?<span className="white-text">...<a  className="white-text" onClick={()=>this.props.fetchQues(que.nextPage)}>{que.lastPage}</a></span>:null
                }
                
                </section>     
                )
                
}  
 renderList=()=>{
       
        return this.props.ques.map(que=>{
            
                return que.ques.map(((qu,index)=>{
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
         {qu.answers.map(answer=>
         {    return<div>
                  
                     {/* { corrAns=qu.corr.filter(corr=>{
                           return corr!==Object.values(answer)
                           
                     })
                } */}
                    <li className={corrAnsStyle}>{Object.values(answer)}</li>
                   
                   </div>
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
 
         <div className="container w3-grey border border-dark black-text" style={{paddingBottom:"20px"}} >
 
 
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
         <div id={`used${qu._id}`} className="container collapse " style={{marginTop:"20px"}} >
          <div className="black-text w3-grey border border-dark" >
          <ul style={{paddingTop:"10px"}}>Test in which this question is used
          <li>{qu.test.testName}</li>
          </ul> 
          </div>
         </div>

 
         <hr></hr>
 
         <ul id="options" className="col-lg-9 col-xl-9 col-md-10 col-sm-12 col-12">
               
               {/*Answers button*/}
                 <li><a href={`#demo${qu._id}`} data-toggle="collapse" className="pink-text font-weight-bold"><i className="fa fa-expand " aria-hidden="true"></i>Answers</a></li>
                
                {/*Edit Question button*/}
                <li ><Link to={{ pathname: '/dashboard/editQues' , state: { question: qu.question, answers: qu.answers, quesId: qu._id ,type:qu.type, corr:qu.corr} }}  className="pink-text  font-weight-bold" onClick={()=>{this.handleClick(qu.test)}}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</Link></li>

                {/*Used In button show us test in which question is used*/}
                 <li><a href={`#used${qu._id}`} className="pink-text  font-weight-bold" data-toggle="collapse"><i className="fa fa-share" aria-hidden="true"></i>Used In</a></li>
                 
                 {/*Delete Question button*/}
                 <li><a href className="pink-text  font-weight-bold"
                  onClick={()=>this.handleDelete(qu._id)}><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</a></li>
 
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
            
    <div className="jumbotron vertical-center black" style={{border:"3px solid #42a5f5"}}> 

<Tab></Tab>
<br></br>

<div className="container"  >
    <div className="w3-container w3-padding-16  w3-border-blue w3-leftbar blue lighten-4 pink-text" style={{color:"#1C2331"}}id="QuestionBank">
        
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
 
   <div className="w3-container w3-padding-16 w3-border-blue w3-leftbar blue lighten-4 " id="Questions" style={{color:"#1C2331"}}>

        
    <div className="row ">
        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-5 col-6">
                <Button></Button >
        </div>

        <div className="col-xl-3  col-lg-3 col-md-3 col-sm-4 col-5">
                <div className="dropdown">
                <button  className="btn pink white-text dropdown-toggle " data-toggle="dropdown">
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
               <button type="button" className="btn pink white-text dropdown-toggle" data-toggle="dropdown">
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
{
 this.DynamicButtons()
}

</div>
</div>)
  
}}
const mapStateToProps=(state)=>{
        console.log(state.questions.question)
        return{
                ques:Object.values(state.questions),
             
}
}

export default connect(mapStateToProps,{fetchQues,deleteQuestion,editTest})(QuestionBank);
