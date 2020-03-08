import React, { Component } from 'react';
import Editor from './Editor';
import QuesType from './QuesType';
import TestWindow from './TestWindow';
import { Field, reduxForm, isPristine } from 'redux-form';
import renderField from './renderField';
import { connect } from 'react-redux';
import { addQues, quesType } from '../actions';

var cAns = [];
class AddQues extends Component {

    componentDidMount() {
        this.props.quesType("T/F")
    }
    state = {
        type: "T/F",
        show: false,
        ans: ''
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
        this.setState({ ans })
        // cAns=[...cAns,ans]
    }
    handleSubmit = (formValues) => {
        cAns = [...cAns, this.state.ans]
        cAns = cAns.map(cA => formValues[cA])
        console.log(cAns);
        formValues = { ...formValues, corr: cAns }
        console.log(formValues)
        this.props.addQues(formValues)
    }
    render() {

        return (
            <div>
                <TestWindow to={this.props.match.url} label="Add Questions" separator=' > ' />
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} style={{ margin: "100px" }}>
                    <h3>Select Question Type</h3><br />
                    <QuesType parentFunction={this.callbackFunction} /><br />
                    <h3>Question 1</h3><br />
                    <Editor name={"question"} question />
                    {this.state.type === "MCQs" ? (
                        <div>
                            <h3>Answer 1</h3>
                            <Editor name={"answer1"}  corrAns={this.corrAnsFunction} />
                            <h3>Answer 2</h3>
                            <Editor name={"answer2"}  corrAns={this.corrAnsFunction} />
                            <h3>Answer 3</h3>
                            <Editor name={"answer3"}  corrAns={this.corrAnsFunction} /></div>) :
                        (<div>
                            <h3>Answer </h3>
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

const formWrapped = reduxForm({
    form: 'Question',
   
})(AddQues);

export default connect(null, { addQues, quesType })(formWrapped);
