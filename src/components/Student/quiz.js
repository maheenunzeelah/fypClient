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
        <div >
        
         <center>
           <Card>
             
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
export default connect(mapStateToProps,{fetchQues})(withStyles(styles)(Quiz))