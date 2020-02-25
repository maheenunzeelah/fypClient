import React,{Component} from 'react';
import Editor from './Editor';
import QuesType from './QuesType';

class AddQues extends Component{
    render(){
        return(
         <div>
             <h3>Select Question Type</h3>
             <QuesType />
             <h3>Question 1</h3>
            <Editor />
            <h3>Answer 1</h3>
            <Editor />
            <h3>Answer 2</h3>
            <Editor />
            <h3>Answer 3</h3>
            <Editor />
         </div>
        );
    }
}

export default AddQues;