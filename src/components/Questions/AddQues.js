import React, { Component } from 'react';
import Editor from './Editor';
import QuesType from './QuesType';
import TestWindow from '../TestWindow';
import { Field, reduxForm, isPristine, getFormValues } from 'redux-form';
import renderField from '../renderField';
import { connect } from 'react-redux';
import { addQues, quesType, editTest } from '../../actions';
import { func } from 'prop-types';
import {isEmpty} from '../../validation/is-empty'
import _ from 'lodash';

let cAns = []; //For storing correct answers

class AddQues extends Component {

    constructor(props) {
        super(props)
        // console.log(this.props.location.state.id)
        this.state = {
            type: "T/F",
            show: false,
            ans: '',
            
            availAnsOpt: 3 // default ans options for MCQs
        }

    }


    componentDidMount() {
     
        this.props.quesType("T/F")
    }
    componentWillMount(){
        console.log(this.props.location.state)
        if(!isEmpty(this.props.location.state)){
            this.setState({
                currentTest:this.props.location.state.id
            },()=>{this.props.editTest(this.state.currentTest)})
        }
        else{
            this.props.editTest(this.props.currentTest)
        }
     
    }
    conponentWillUnmount(){
       this.props.editTest(null)
    }
    callbackFunction = (ChildData) => {
        this.setState({
            type: ChildData
        })
        this.props.quesType(ChildData);
        //  console.log(this.props.quesType)  
    }
    corrAnsFunction = (ans, val) => {
        this.setState({ show: val })
        var answer
        if (val === false && this.state.ans.length > 0) {
            answer = this.state.ans.filter(an => {
                return an !== ans
            })
            this.setState({ ans: answer }, () => console.log(this.state.ans))
        }
        else {

            this.setState({ ans: [...this.state.ans, ans] }, () => console.log(this.state.ans))
        }

    }
    handleSubmit = (formFields) => {
    
        console.log(this.props.formValues)
        var answers = [] //For all answers
        var partial = {}
        const { formValues } = this.props
        if (this.state.type === 'MCQs') {
            //Getting form values from Editor through mapStateToProps


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
            partial = { ...formValues, ...formFields }
        } //for T/F

        console.log(partial)
        //Send complete partial object that contains all form values into action creator
        this.props.addQues(partial)
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
                <TestWindow to={this.props.match.url} label="Add Questions" separator=' > ' />

                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} style={{ margin: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="pink-text">Select Question Type</h3><br />
                                <QuesType parentFunction={this.callbackFunction} /><br />
                            </div>
                            {this.state.type === "MCQs" ? (
                                /*If MCQs select how many options should be there for answers*/
                                <div className="col-md-3">
                                    <div className="jumbotron blue lighten-2 black-text">
                                        <label for="ansOptions">Choose availabe options</label>
                                        <select className="form-control" id="ansOptions" onChange={this.availAns}>
                                            <option value="2" >2</option>
                                            <option value="3" selected >3</option>
                                            <option value="4" >4</option>
                                        </select>


                                    </div>
                                </div>) : <div></div>}
                        </div>
                    </div>

                    <h3 className="pink-text">Question 1</h3><br />
                    <Editor name="question" question />

                    {
                        // When Ques Type is MCQs

                        this.state.type === "MCQs" ? (

                            _.times(this.state.availAnsOpt, (i) => <div>
                                <h3 className="pink-text">{`Answer${i + 1}`}</h3>

                                {/*Using loadash library _.times to repeat component n times*/}
                                <Editor name={`answer${i + 1}`} corrAns={this.corrAnsFunction} />
                            </div>)) :

                            // When Ques Type is True/False
                            (<div>
                                <h3 className="pink-text">Answer </h3>
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
                        Save
            </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.currentTest   )
    return {
        //getting all Field Values from Editor form
        currentTest: state.currentTest,
        formValues: getFormValues('Editor')(state) // here 'form' is the name you have given your redux form 
    }
}
const formWrapped = reduxForm({
    form: 'Question',
    pristine: isPristine('Question')
})(AddQues);

export default connect(mapStateToProps, { addQues, quesType, editTest })(formWrapped);
