import React, { Component } from 'react';
import Editor from './Editor';
import QuesType from './QuesType';
import TestWindow from '../TestWindow';
import { Field, reduxForm, isPristine, getFormValues } from 'redux-form';
import renderField from '../renderField';
import { connect } from 'react-redux';
import { editQues, quesType } from '../../actions';
import { func } from 'prop-types';
import _ from 'lodash';


class EditQues extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        //data from react router props passed in Link from Question Bank Component
        data: {
            quesId: this.props.location.state.quesId,
            question: this.props.location.state.question,
            answers: this.props.location.state.answers,
            type: this.props.location.state.type,
            corrAnswer: this.props.location.state.corr
        },
        show: false,
        ans: this.props.location.state.corr,
       
    }


    // state = {
    //     // type: "T/F",
    //     show: false, 
    //     ans: '',
    //     availAnsOpt: 3 // default ans options for MCQs
    // }

    corrAnsFunction = (ans, val) => {
        this.setState({ show: val })
        var answer
       // if box is unchecked means and is incorrect then remove that ans from ans array 
       //in state
        if(val===false && this.state.ans.length>0){
             answer=this.state.ans.filter(an=>{
                return an!==ans
            })  
            this.setState({ans:answer},()=> console.log(this.state.ans))
        }
        //if box checked means ans is correct then add that in ans array in state
        else{
    
            this.setState({ans:[...this.state.ans,ans]},()=> console.log(this.state.ans))
        }
     
        
      
    }
    handleSubmit = (formValues) => {
     
        var answers = []
        var partial = {}
        if (this.state.data.type === 'MCQs') {

            const { formValues } = this.props //From mapStateToProps

            for (var x in formValues) {

                // searches in formValue object for answer keys
                if (x.includes("answer")) {
                    // answer array or objects in which each obj containes answer key/value pair
                    answers = [...answers, { [x]: formValues[x] }]
                }
                else {
                    //rest of the values of formValue object are inserted into partial object
                    partial = { ...partial, [x]: formValues[x] }
                }
            }
            //concatenate partial object and answer array into single object
            partial = { ...partial, answers }
           
            // Insert corrAns value in partial object
            partial = { ...partial, corr: this.state.ans }
        } 
        else { 
            partial = formValues 
        }
        console.log(partial)


        //Send complete partial object that contains all form values into action creator
        this.props.editQues({ id: this.state.data.quesId, ...partial })
    }

    availAns = (e) => {
        // Number of options for MCQs answers selected by user from drop down
        let sel = document.getElementById('ansOptions');
        let sv = sel.options[sel.selectedIndex].value;
        // setting that number in state
        this.setState({
            availAnsOpt: sv
        })
    }
    render() {
   
        return (
            <div>
                {/* For breadcrumbs */}
                <TestWindow to={this.props.match.url} label="Edit Questions" separator=' > ' />

                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} style={{ margin: "100px" }}>
                    <div className="container">
                        <div className="row">

                            {/* {this.state.data.type === "MCQs" ? (
                               
                                <div className="col-md-3">
                                    <div className="jumbotron blue lighten-2 black-text">
                                        <label for="ansOptions">Choose availabe options</label>
                                        <select className="form-control" id="ansOptions" onChange={this.availAns}>
                                            <option value="2" >2</option>
                                            <option value="3" selected >3</option>
                                            <option value="4" >4</option>
                                        </select>


                                    </div>
                            </div>) : <div></div>} */}
                        </div>
                    </div>

                    <h3 className="white-text">Question 1</h3><br />
                    <Editor name="question" question defaultQues={this.state.data.question} />
                    {/* <Editor name={`answer${i+1}`} corrAns={this.corrAnsFunction} />  */}
                    {
                        // When Ques Type is MCQs

                        this.state.data.type === "MCQs" ? (
                            this.state.data.answers.map((answer, index) => {
                                return <div>
                                    <h3 className="white-text">{`Answer ${index + 1}`}</h3>
                                    {/*Passing values of answers of object for auto filling feilds in editing questions*/}
                                    <Editor name={`answer${index + 1}`} answer={Object.values(answer)} corr={this.state.data.corrAnswer} corrAns={this.corrAnsFunction} />
                                </div>
                            })
                        ) :

                            // When Ques Type is True/False
                            (<div>
                                <h3 className="white-text">Answer </h3>
                                <div className="jumbotron" style={{ width: "650px", height: "180px", margin: "20px" }}>
                                    <p className="lead">This is the correct answer</p>
                                    <label>
                                        <Field type="radio" name="answer" component="input" value="true" />
                                        True
                </label><br />
                                    <label>
                                        <Field type="radio" name="answer" component="input" value="false" />
                                        False
                </label>
                                </div>
                            </div>
                            )
                    }
                    <button type="submit" className="btn btn-primary">
                        Save Changes
            </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        //getting all Field Values from Editor form
        formValues: getFormValues('Editor')(state) // here 'form' is the name you have given your redux form 
    }
}
let formWrapped = reduxForm({
    form: 'EDIT_QUES'

})(EditQues);

export default connect(mapStateToProps, { editQues })(formWrapped);
