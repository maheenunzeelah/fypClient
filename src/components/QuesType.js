import React , {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
class QuesType extends Component{
   sendQuestionType=(e,type)=>{
       e.preventDefault();
   this.props.parentFunction(type)
   }
    render(){
        
        return(
            <div className="container">
            
             <div className="row" >
              <div className="col-md-1">
               <button className=".btn-default"  onClick={(e)=>{this.sendQuestionType(e,"T/F")}}>True/False</button>
               
              </div>&nbsp;
              <div className="col-md-1" >
              <button className=".btn-default"  onClick={(e)=>{this.sendQuestionType(e,"MCQs")}}>MCQ's</button>
               
              </div>

             </div>
             </div>

            
        );
    }
}
export default QuesType;
//style={{backgroundColor:"white", height:"40px"}}