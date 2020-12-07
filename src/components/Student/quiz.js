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
class Quiz extends React.PureComponent {
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
  // handleAnsClick=(value)=>{
  //    this.props.reset();
  //    const {currentQuesIndex,answers,answer}=this.state
  //    const {questions}=this.props;
  //    if(currentQuesIndex==questions.length-1){
  //     this.setState(prevState => {
  //             return prevState.perct = prevState.score * 100 / this.props.questions.length
  //           }, () => this.props.result(this.state.answers, this.props.questions[index].test, this.state.score, this.state.perct)) 
  //    }
  //    else{
  //      this.setState(prevState=>{
  //        return {
  //          currentQuesIndex:prevState.currentQuesIndex+1,
  //          answers=[...prevState.answers,{...value,ques:this.props.questions[prevState.currentQuesIndex].question}],

  //        }
  //      })
  //    }
  // }
  handleAnsClick = (value) => {
    const { classes } = this.props
    //check if tests have questions or not
    let index;
    let key;
    let ans;
    this.props.reset()
    console.log(this.state.currentQuesIndex)
    if (this.state.currentQuesIndex != this.props.questions.length) {
      this.setState((prevState) => {
        console.log(prevState.currentQuesIndex, this.props.questions[prevState.currentQuesIndex].question)
        // increase index
        return {
          answers: [...prevState.answers, { ...value, ques: this.props.questions[prevState.currentQuesIndex].question }],
          currentQuesIndex: prevState.currentQuesIndex + 1,
          answer: [...prevState.answer, value]
        }
      }, () => {
        console.log(this.state.answers)

      })

      index = this.state.currentQuesIndex

      console.log(index)
      key = Object.keys(value) //to match mcqs ans

      // value = { ...{ ...value, ques: this.props.questions[this.state.currentQuesIndex].question } }

      ans = Object.values(value) //to match T/F ans
      


      if (this.props.questions[index].type === 'T/F') {

        if (ans[0] == this.props.questions[index].answer) {
          console.log('yes')
          this.setState(prevState => {
            return prevState.score = prevState.score + 1
          }, () => console.log(ans[0] + " is correct"))

        }
        else {
          console.log(ans[0] + " is incorrect")
        }
      }

      else if (this.props.questions[index].type === 'MCQs') {
        // The ans clicked by user will have true value

        let score = this.props.questions[index].corr.reduce((acc, corrAns, i) => {
          if (key.length != this.props.questions[index].corr.length)
            return
          if (key[i].indexOf(corrAns) != -1) {
            return acc + 1
          }
        }, 0)
        console.log("score" + score)
        if (score == this.props.questions[index].corr.length)
          this.setState(prevState => { return { score: prevState.score + 1 } })
      }
    }

    if (this.state.currentQuesIndex == this.props.questions.length - 1) {
      console.log(this.state.perct)
      this.setState(prevState => {
        return prevState.perct = prevState.score * 100 / this.props.questions.length
      }, () => this.props.result(this.state.answers, this.props.questions[index].test, this.state.score, this.state.perct))

    }
  }

  render() {
    const { classes, questions } = this.props
    let val, val2
    console.log(questions.length, this.state.currentQuesIndex)
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
                          <Field type="checkbox" name={`answer${i + 1}`}  normalize={v => v ? Object.values(ans)[0] : '0'} component="input" style={{ margin: "10px", fontSize: '18px' }} />
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
      const { answer } = this.state


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

                  console.log(answer)

                  return <div className=" jumbotron grey lighten-4">
                    <h4><bold>{`Question${index + 1} of ${questions.length}`}</bold></h4>
                    <hr />
                    <p>{ques.question}</p>
                    <div>

                      {ques.type == 'T/F' ?
                        <div ><p className="green-text font-weight-bold">Correct Ans: {ques.answer}</p>
                          <p className={ques.answer == Object.values(answer[index]) ? "black-text" : "red-text"}> Your Ans : {Object.values(answer[index])}</p>
                        </div>
                        : <div><p>Correct Ans: {ques.corr.map(ans => 
                        <ul><li>{ques.answers.map(an => {
                          if (Object.keys(an) == ans) {
                            return Object.values(an)
                          }
                        })}
                        </li></ul>
                      )}</p>
                     <p >Your Ans: 
                     {
                       ques.answers.map((ans,i)=>
                      {
                        if(Object.keys(answer[index])[i]==Object.keys(ans)){
                          return <li>{Object.values(ans)[i]}</li>
                        }
                        
                        }
                      )}</p>
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
})(React.memo(Quiz))
export default connect(mapStateToProps, { quesList, result })(withStyles(styles)(formValues))