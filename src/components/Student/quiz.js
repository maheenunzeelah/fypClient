import React, { Component } from 'react';
import { Card, Typography, Button, CardActions, CardContent, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { quesList,result } from '../../actions';
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
      perct:0,
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
   // console.log(this.props)
    // this.setState({numOfQues:questions.length})
  }
// handleClick=()=>{

// }
handleAnsClick=(value)=>{
  const {classes}=this.props
  //check if tests have questions or not
  console.log(this.state.currentQuesIndex)
  if(this.state.currentQuesIndex!=this.props.questions.length){
    this.setState((prevState)=>{
       // increase index
        return prevState.currentQuesIndex=prevState.currentQuesIndex+1
      })}
   
  let index=this.state.currentQuesIndex
  let ans=Object.values(value) //to match T/F ans
  let key=Object.keys(value) //to match mcqs ans
  console.log(value,ans[index],index)
  
  if(this.props.questions[index].type==='T/F'){
    if(ans[index]===this.props.questions[index].answer){
      this.setState(prevState=>{
        return prevState.score=prevState.score+1
      })
      console.log(ans[index]+ " is correct" )
    }
    else{
      console.log(ans[index]+ " is incorrect" )
    }
  }

  else if(this.props.questions[index].type==='MCQs')
 {
   // The ans clicked by user will have true value
   if(ans[index]){
     this.props.questions[index].corr.map(corrAns=>{
       //If corr ans array have name part of which matches with key of selected ans
       if(key[index].indexOf(corrAns)!=-1){
        this.setState(prevState=>{
          return prevState.score=prevState.score+1
        })
         console.log(key[index] +" is correct")
       }
       else{
        console.log(key[index] +" is incorrect")
       }
     })
   }
 }
 if(this.state.currentQuesIndex==this.props.questions.length-1){
   console.log("done")
   this.setState(prevState=>{
    return prevState.perct=prevState.score*100/this.props.questions.length
  },()=> this.props.result(value,this.props.questions[index].test,this.state.score,this.state.perct))
  
  }
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
                      <Field type="checkbox"  name={"mcq"+Object.keys(ans)} component="input"  />
                      {Object.values(ans)}
                      
                </label>
                <br />
                </div>
                    })}
                  <br />
                    
                    </div>}
                    <Button className='pink float-right' type="submit">Next</Button>
                    </form>
                </CardContent>
              </div>
            </Card>
          
        </div>
      )
    }
    else if(this.state.currentQuesIndex==questions.length){
      return <Card className={classes.root}>
      <CardContent className={classes.content}>
        <p>Result:{` ${this.state.perct} %`}</p>
      </CardContent>
      </Card>}
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
export default connect(mapStateToProps, { quesList,result })(withStyles(styles)(formValues))