import React , {Component} from 'react';
import {Card,Typography,Button,CardActions,CardContent,withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {quesList} from '../../actions'; 


const styles=(themes)=>({
  root: {
    display: 'flex',
    width:'365px',
    margin:'120px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
     
})
class Quiz extends Component{
constructor(props){
    super(props);
    this.state={
        questions:[],
        currentQues:{},
        nextQues:{},
        previousQues:{},
        answer:'',
        numOfQues:0,
        numOfAnsweredQues:0,
        currentQuesIndex:0,
        score:0,
        corrAnswers:0,
        wrongAnswers:0,
        time:{}
    }
}
componentDidMount(){
  
this.props.quesList(this.props.location.state.id)
}

render(){
    const {classes}=this.props
    
    return(
        <div className="container">
        
         <center>
           <Card  className={classes.root}>
           <div className={classes.details}>
           <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Question
          </Typography>
          <Typography variant="subtitle1" color="black">
           
          </Typography>
          {}
        </CardContent>
        </div>
             </Card>
         </center>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
  console.log(state.questions)
   return{
     questions:state.questions
   }
}
export default connect(mapStateToProps,{quesList})(withStyles(styles)(Quiz))