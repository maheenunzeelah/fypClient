import React,{Component} from 'react';
import Editor from './Editor';
import QuesType from './QuesType';
import {Field, reduxForm} from 'redux-form';
import renderField from './renderField';
import {connect} from 'react-redux';
import {addQues,quesType} from '../actions';
class AddQues extends Component{
  componentDidMount(){
      this.props.quesType("T/F")
  }
    state={
        type:"T/F"
    }
    callbackFunction=(ChildData)=>{
        this.setState({
            type:ChildData
        })
    this.props.quesType(ChildData);
  //  console.log(this.props.quesType)
    }
    handleSubmit=(formValues)=>{
      this.props.addQues(formValues)
    }
    render(){
       
        return(
         <div>
             <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
             <h3>Select Question Type</h3>
             <QuesType parentFunction={this.callbackFunction}/>
             <h3>Question 1</h3>
            <Editor name={"question"}/>
            {this.state.type==="MCQs"?(
                <div>
            <h3>Answer 1</h3>
            <Editor name={"answer"}/>
            <h3>Answer 2</h3>
            <Editor name={"answer"}/>
            <h3>Answer 3</h3>
            <Editor name={"answer"}/></div>):
            (<div>
                 <h3>Answer </h3>
            <div className="jumbotron" style={{width:"650px", height:"180px", margin:"20px"}}>
                <p className="lead">This is the correct answer</p>
                <label>
                <Field type="radio" name="answer" component="input" value="true" />
                True
                </label><br />
                <label>
                <Field type="radio" name="answer" component="input"  value="false"/>
                False
                </label>
            </div>
            </div>
            )
            }
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            </form> 
         </div>
        );
    }
}

const formWrapped= reduxForm({
    form: 'Question',
    
  })(AddQues);
  
  export default connect(null,{addQues,quesType})(formWrapped); 
    