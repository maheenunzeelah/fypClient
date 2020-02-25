import React,{Component} from 'react';
import {Field, reduxForm } from 'redux-form'
class Editor extends Component{
   
    render(){
    return(
    <div className="Editor">
     <div>
        
        <div>
          <Field name={this.props.name} component="textarea" style={{width:"650px", height:"180px", margin:"20px"}}/>
        </div>
      </div>

     
    </div>
    );
}
}
export default Editor;