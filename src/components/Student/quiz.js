import React, { Component } from 'react';
import { Card, Typography, Button, CardActions, CardContent, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { quesList, result } from '../../actions';
import { Field, isPristine, reduxForm, change } from 'redux-form';
import { isEmpty } from '../../validation/is-empty'

const styles = (themes) => ({
  root: {
    display: 'flex',
    width: '400px',
    margin: '120px',
    backgroundColor: '#eeeeee'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    padding: '20px'
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
      answer: [],
      numOfQues: 0,
      numOfAnsweredQues: 0,
      currentQuesIndex: 0,
      score: 0,
      perct: 0,
      corrAnswers: 0,
      wrongAnswers: 0,
      time: {},
      answers: []
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
  componentDidMount() {
    // console.log(this.props)
    // this.setState({numOfQues:questions.length})
  }
  // handleClick=()=>{

  // }
  handleAnsClick = (value) => {
    const { classes } = this.props
    //check if tests have questions or not
    console.log(value)
    this.props.reset()
    if (this.state.currentQuesIndex != this.props.questions.length) {
      this.setState((prevState) => {
        // increase index
        return prevState.currentQuesIndex = prevState.currentQuesIndex + 1
      })
    }
    let index = this.state.currentQuesIndex
    console.log(Object.values(value))
    let key = Object.keys(value)
    this.setState({
      answers:[...this.state.answers,{...value,ques:this.props.questions[this.state.currentQuesIndex].question}]
    },()=>{console.log(this.state.answers)})
    // value = { ...{ ...value, ques: this.props.questions[this.state.currentQuesIndex].question } }
    
    let ans = Object.values(value) //to match T/F ans
   //to match mcqs ans
    

    if (this.props.questions[index].type === 'T/F') {
      if (ans[index] === this.props.questions[index].answer) {
        this.setState(prevState => {
          return prevState.score = prevState.score + 1
        })
        console.log(ans[index] + " is correct")
      }
      else {
        console.log(ans[index] + " is incorrect")
      }
    }

    else if (this.props.questions[index].type === 'MCQs') {
      // The ans clicked by user will have true value
      if (ans[index]) {
        this.props.questions[index].corr.map(corrAns => {
          //If corr ans array have name part of which matches with key of selected ans
          if (key[index].indexOf(corrAns) != -1) {
            this.setState(prevState => {
              return prevState.score = prevState.score + 1
            })
            console.log(key[index] + " is correct")
          }
          else {
            console.log(key[index] + " is incorrect")
          }
        })
      }
    }
    if (this.state.currentQuesIndex == this.props.questions.length - 1) {
      console.log("done")
      this.setState(prevState => {
        return prevState.perct = prevState.score * 100 / this.props.questions.length,
          prevState.answer = value
      }, () => this.props.result(this.state.answers, this.props.questions[index].test, this.state.score, this.state.perct)) 

    }
  }

  render() {
    const { classes, questions } = this.props
    let val, val2
    console.log(questions.length, this.state.currentQuesIndex,this.state.answer)
    if (!isEmpty(questions) && this.state.currentQuesIndex != questions.length) {
      return (
        <div className="container">


          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <form onSubmit={this.props.handleSubmit(this.handleAnsClick)}>
                  <Typography component="h4" variant="h4" className="mb-3">
                    Question {this.state.currentQuesIndex + 1}
                  </Typography>
                  <Typography style={{ fontSize: "17px" }} color="black">
                    {questions[this.state.currentQuesIndex].question}
                  </Typography>
                  {questions[this.state.currentQuesIndex].type == 'T/F' ? <div>
                    <label >
                      {/* {`answer${this.state.currentQuesIndex}`} */}
                      <Field type="radio" name="answer" style={{ margin: "10px", fontSize: '16px' }} component="input" value="true" />
                      True
                </label><br />
                    <label>
                      <Field type="radio" name="answer" style={{ margin: "10px", fontSize: '18px' }} component="input" value="false" />
                      False
                </label>

                  </div> : <div>
                      {questions[this.state.currentQuesIndex].answers.map((ans, i) => {
                        return <div><label>
                          <Field type="checkbox" name={`answer${i+1}`} component="input" style={{ margin: "10px", fontSize: '18px' }}  />
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
    else if (this.state.currentQuesIndex == questions.length) {
      const { testName, groupName } = this.props.location.state;
      return <Card className="container" style={{ marginTop: '80px', padding: '50px', marginBottom: '80px', border: '3px solid #e3f2fd' }}>
        <CardContent>
          <div className="container">
            <div className="row " style={{ fontSize: '22px' }}>
              <div className="col-md-6"  >
                <h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>Student Name: {this.props.user.studentName}</h5>

                <h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>Group Name: {groupName}</h5>

                <h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>Test Name: {testName}</h5>
              </div>

              <div className="col-md-6">
                <h2 className="blue-text">Result:</h2>
                Score: {`${this.state.score}/${questions.length}`}
                <br />
                Percentage :{`${this.state.perct} %`}
                <div className="progress" style={{ width: '200px' }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${this.state.perct}%` }} aria-valuenow={this.state.perct} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-9">

                {questions.map((ques, index) => {
                  val = Object.values(this.state.answer)

                  console.log(val[index])

                  return <div className=" jumbotron grey lighten-4">
                    <h4><bold>{`Question${index + 1} of ${questions.length}`}</bold></h4>
                    <hr />
                    <p>{ques.question}</p>
                    <div>

                      {ques.type == 'T/F' ?
                        <div ><p className="green-text font-weight-bold">Correct Ans: {ques.answer}</p>
                          <p className={ques.answer == val[index] ? "black-text" : "red-text"}> Your Ans : {val[index]}</p>
                        </div>
                        : <div><p>Correct Ans: {ques.corr.map(ans => <ul><li>{ques.answers.map(an => {
                          if (Object.keys(an) == ans) {
                            return Object.values(an)
                          }
                        })}</li></ul>)}</p>
                        </div>
                      }

                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    }
    else {
      return <div></div>
    }

  }
}
const mapStateToProps = (state) => {
  console.log(state.questionList)
  return {
    questions: state.questionList,
    user: state.auth.user
  }
}
const formValues = reduxForm({
  form: 'quiz',
  pristine: isPristine('quiz'),
})(Quiz)
export default connect(mapStateToProps, { quesList, result })(withStyles(styles)(formValues))