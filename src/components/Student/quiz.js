import React , {Component} from 'react';
import {Card,Typography,Button,CardActions,CardContent,withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {fetchQues} from '../../actions'; 


const styles=(themes)=>({
    root: {
        width:'100%',
        margin:'0 auto'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      card:{
        marginTop:'100px'
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
        cureentQuesIndex:0,
        score:0,
        corrAnswers:0,
        wrongAnswers:0,
        time:{}
    }
}
componentDidMount(){
   this.props.fetchQues()
}
render(){
    const {classes}=this.props
    return(
        <div className={classNames(classes.root, "d-flex flex-col flex-auto flex-no-shrink align-items-center justify-center p-32")}>
        
           <Card className={classNames(classes.card)} variant="outlined">
      <CardContent className="flex flex-col items-center justify-center p-32">
        <Typography variant="h6" className={classNames( "mt-16 mb-32")}>
          Questions
        </Typography>
        
      </CardContent>
      
    </Card>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
   return{
     
   }
}
export default connect(null,{fetchQues})(withStyles(styles)(Quiz))