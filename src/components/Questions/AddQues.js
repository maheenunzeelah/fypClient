import React, { Component } from 'react';
import Editor from './Editor';
import QuesType from './QuesType';
import TestWindow from '../TestWindow';
import { Field, reduxForm, isPristine } from 'redux-form';
import renderField from '../renderField';
import { connect } from 'react-redux';
import { addQues, quesType } from '../../actions';
import { func } from 'prop-types';
import _ from 'lodash';

let cAns = [];

class AddQues extends Component {

    componentDidMount() {
        this.props.quesType("T/F")
    }
    state = {
        type: "T/F",
        show: false,
        ans: '',
        availAnsOpt: 3
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
        var answers=[]
        var partial={}
       for(var x in formValues){
            if(x.includes("answer")){
             answers= [...answers,{[x]:formValues[x]}]
            }
            else{
            partial={...partial,[x]:formValues[x]}
            }
        }
     partial={...partial,answers}
     console.log(partial)
        {/*Spread operator will add corr ans*/}
        cAns = [...cAns, this.state.ans]
        partial = { ...partial, corr: cAns }
        
        this.props.addQues(partial)
    }
    availAns = (e) => {

        let sel = document.getElementById('ansOptions');
        let sv = sel.options[sel.selectedIndex].value;
        this.setState({
            availAnsOpt: sv
        })
    }

    render() {
        return (
            <div>
                <TestWindow to={this.props.match.url} label="Add Questions" separator=' > ' />

                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} style={{ margin: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="white-text">Select Question Type</h3><br />
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

                    <h3 className="white-text">Question 1</h3><br />
                    <Editor name={"question"} question />

                    {this.state.type === "MCQs" ? (
                     
                      _.times(this.state.availAnsOpt,(i)=> <div>
                       <h3 className="white-text">{`Answer${i+1}`}</h3>
                          {/*Using loadash library _.times to repeat component n times*/}
                       <Editor name={`answer${i+1}`} corrAns={this.corrAnsFunction} /> 
                         </div>)):
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
