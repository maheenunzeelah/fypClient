import React , {Component} from 'react'
import  '../../css/QuestionBank.css'
import Button from '../Button.js'
import Tab from '../Tab.js'
import TestWindow from '../TestWindow';
import { Link , withRouter } from 'react-router-dom' ;
import {connect} from 'react-redux';
import {fetchQues,deleteQuestion,editTest,fetchCourseList} from '../../actions';

let corrAnsStyle="";
let corrAns;
let isQues;

class QuestionBank extends Component{

state={
     course:''   ,
     type:'',
     search:''
} 
 
 componentDidMount(){
         this.props.fetchQues(1);
         this.props.fetchCourseList()
 }
 updateSearch = (e) => {
        this.setState({
          search: e.target.value
        })
      }
 handleCourseChange=(e)=>{
        let sel = document.getElementById('coursesOpt');
        let sv = sel.options[sel.selectedIndex].value;
        // setting that number in state
        this.setState({
            course: sv
        })

 }
 handleTypeChange=()=>{
         let sel=document.getElementById('quesTypeOpt');
         let sv= sel.options[sel.selectedIndex].value;
         this.setState({
                 type:sv
         })
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
                  {que.currentPage!=1 && que.previousPage!=1?<a className="white-text" onClick={()=>this.props.fetchQues(1,this.state)}>1</a>:null}
                  {que.hasPreviousPage?<a  className="white-text" onClick={()=>this.props.fetchQues(que.previousPage,this.state)}>{que.previousPage}</a>:null}
                   <a  className="white-text" onClick={()=>this.props.fetchQues(que.currentPage,this.state)}>{que.currentPage}</a>
                  
                   {que.hasNextPage?<a  className="white-text" onClick={()=>this.props.fetchQues(que.nextPage,this.state)}>{que.nextPage}</a>:null}
                  { (que.lastPage!=que.currentPage && que.nextPage!=que.lastPage)?<span className="white-text">...<a  className="white-text" onClick={()=>this.props.fetchQues(que.lastPage,this.state)}>{que.lastPage}</a></span>:null
                }
                
                </section>     
                )
                
}  
handleSubmit=(e)=>{
       e.preventDefault()
      this.props.fetchQues(1,this.state)
}
 renderList=()=>{
       
        return this.props.ques.map(que=>{
                   let quesNo=((que.currentPage-1)*que.ques_per_page)+1
                   console.log(que.ques)
                  return que.ques.length>0? (
                    que.ques.map(((qu)=>{
                        console.log(qu)
                        return(
         
         <div>     
        <div className="" id="Qheading">
        <span> Question {quesNo++}</span>
       
            <ul class="float-right">
            <li>{qu.test.course}</li>
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
          {qu.test!=null?
          <li>{qu.test.testName}</li>:null
          }
          </ul> 
          </div>
         </div>

 
         <hr></hr>
 
         <ul id="options" className="col-lg-9 col-xl-9 col-md-10 col-sm-12 col-12" >
               
               {/*Answers button*/}
                 <li><a href={`#demo${qu._id}`} data-toggle="collapse" className=" font-weight-bold blue-grey-text"><i className="fa fa-expand " aria-hidden="true"></i>Answers</a></li>
                
                {/*Edit Question button*/}
                <li ><Link to={{ pathname: '/dashboard/editQues' , state: { question: qu.question, answers: qu.answers, quesId: qu._id ,type:qu.type, corr:qu.corr} }}  className="blue-grey-text font-weight-bold" onClick={()=>{this.handleClick(qu.test)}}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</Link></li>

                {/*Used In button show us test in which question is used*/}
                 <li><a href={`#used${qu._id}`} className="blue-grey-text font-weight-bold" data-toggle="collapse"><i className="fa fa-share" aria-hidden="true"></i>Used In</a></li>
                 
                 {/*Delete Question button*/}
                 <li><a href className="blue-grey-text font-weight-bold"
                  onClick={()=>this.handleDelete(qu._id)}><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</a></li>
 
             </ul>
   <br></br>
   <br></br>
     </div>
     </div> )
       }))      
                   ):<div><h1 className="text-pink">No Question Found</h1></div>
} ) 
 }
   render(){
         
    return(<div className="container">
    <TestWindow to="/QuestionBank" label="Question Bank" separator=" > "/>
            
    <div > 

<Tab></Tab>
<br></br>

<div className="container"  >
    <form onSubmit={(e)=>this.handleSubmit(e)}  className="w3-container w3-padding-16   w3-leftbar  " style={{backgroundColor:"#fff0fb"}} id="QuestionBank">
        
            <h5><strong>Filters:</strong></h5>
           <br></br>

            <div class="w3-row-padding">
            
                <div class="w3-quarter">  
                        <label> Question Type  </label>
                        <select className="w3-input w3-border" id="quesTypeOpt" onChange={this.handleTypeChange}>
                             <option value=''>Both</option>
                                {this.props.quesType!=undefined?this.props.quesType.map(type=>{
                                        return <option value={type}>{type}</option>
                                }):null}
                        </select>
                </div>
                        

                        <div class="w3-quarter">  
                                <label>Category </label>
                                <select className="w3-input w3-border" id="coursesOpt" onChange={this.handleCourseChange}>
                                <option value=''> All</option>
                                 {this.props.courses!=undefined?this.props.courses.map(category=>{
                                     console.log(category)
                                      return<option value={category}>{category}</option>
                                      }):null
                                   } 
                                </select>
                        </div>

                        <div class="w3-quarter">  
                                <label>Search  </label>
                                <input class="w3-input w3-border" type="text" onChange={this.updateSearch} value={this.state.search}></input>
                        </div>

                        <div className="w3-third" >
                                <br></br>
                        <button className="w3-button w3-dark-grey" type="submit" id="btn">Go</button>
                        </div>
                
          </div>

   </form>
<br></br>
 
   <div className="w3-container w3-padding-16  w3-leftbar  " id="Questions" style={{backgroundColor:"#fff0fb"}}>

        
    <div className="row ">
      

        <div className="col-xl-3  col-lg-3 col-md-3 col-sm-4 col-5">
                <div className="dropdown">
                <button  className="btn pink white-text dropdown-toggle " data-toggle="dropdown">
                        Add Questions in Test
                </button>

                <div className="dropdown-menu">
                        <Link to='/dashboard' className="dropdown-item black-text" >Add new </Link>
                         
                </div>
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
  {this.props.ques.map(que=>{

                   isQues=que.ques.length
                })
}
{isQues!=0?this.DynamicButtons():null}


</div>
</div>)
  
}}
const mapStateToProps=(state)=>{
      console.log(state.filter)

        return{
                ques:Object.values(state.questions),
                courses:state.filter.course,
                quesType:state.filter.quesType
             
}
}

export default connect(mapStateToProps,{fetchQues,deleteQuestion,editTest,fetchCourseList})(QuestionBank);
