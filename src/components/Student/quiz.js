import React , {Component} from 'react';
import Modal from '@material-ui/core'

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
render(){
    return(
        <div>
            <Modal>
                <div>
                    <h2>Question 1</h2>
                </div>
            </Modal>
        </div>
    )
}
}

export default Quiz