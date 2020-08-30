import React, { Component } from 'react';
import { Card, Typography, Button, CardActions, CardContent, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { quesList } from '../../actions';
import { Field, isPristine, reduxForm, change } from 'redux-form';
import { isEmpty } from '../../validation/is-empty'

const styles = (themes) => ({
  root: {
    display: 'flex',
    width: '365px',
    margin: '120px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },

})
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQues: {},
      nextQues: {},
      previousQues: {},
      answer: '',
      numOfQues: 0,
      numOfAnsweredQues: 0,
      currentQuesIndex: 0,
      score: 0,
      corrAnswers: 0,
      wrongAnswers: 0,
      time: {}
    }
  }
  displayQuestions = (question) => {
    let { currentQuesIndex } = this.state
    question = this.state.questions
    //  console.log(question)
  }
  componentWillMount() {

    this.props.quesList(this.props.location.state.id)

  }
  componentDidMount(){
    console.log(this.props)
    // this.setState({numOfQues:questions.length})
  }
handleClick=()=>{
if(this.state.currentQuesIndex!=this.props.questions.length){
this.setState((prevState)=>{
    return prevState.currentQuesIndex=prevState.currentQuesIndex+1
  })}
  else{
    return <div className="white">Quiz Ended</div>
  }
}
handleAnsClick=(value)=>{
  if(Object.values(value)===this.props.questions.corrAns){
    
  }
}
displayQuestion=()=>{
  return
}
  render() {
    const { classes, questions } = this.props
    console.log(questions.length,this.state.currentQuesIndex)
    if (!isEmpty(questions) && this.state.currentQuesIndex!=questions.length) {
      return (
        <div className="container">

          
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                <form onSubmit={this.props.handleSubmit(this.handleAnsClick)}>
                  <Typography component="h5" variant="h5">
                    Question
          </Typography>
                  <Typography variant="subtitle1" color="black">
                    {questions[this.state.currentQuesIndex].question}
                  </Typography>
                  {questions[this.state.currentQuesIndex].type == 'T/F' ? <div>
                    <label>
                      <Field type="radio" name={`answer${this.state.currentQuesIndex}`} component="input" value="true" />
                      True
                </label><br />
                    <label>
                      <Field type="radio" name={`answer${this.state.currentQuesIndex}`} component="input" value="false" />
                      False
                </label>

                  </div> : <div>
                    {questions[this.state.currentQuesIndex].answers.map((ans,i)=>{
                      return <div><label>
                      <Field type="checkbox"  name={Object.keys(ans)} component="input"  />
                      {Object.values(ans)}
                      
                </label>
                <br />
                </div>
                    })}
                  <br />
                    
                    </div>}
                    <Button className='pink float-right' type="submit" onClick={this.handleClick}>Next</Button>
                    </form>
                </CardContent>
              </div>
            </Card>
          
        </div>
      )
    }
    else if(this.state.currentQuesIndex==questions.length){
     return <div className="pink-text">Quiz Ended</div>
    }
    else {
      return <div></div>
    }

  }
}
const mapStateToProps = (state) => {
  console.log(state.questionList)
  return {
    questions: state.questionList
  }
}
const formValues=reduxForm({
  form: 'quiz',
  pristine: isPristine('quiz'),
})(Quiz)
export default connect(mapStateToProps, { quesList })(withStyles(styles)(formValues))