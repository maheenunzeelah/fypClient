import React,{Component} from 'react';

class Editor extends Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
    return(
    <div className="Editor">
     <textarea value={this.state.value} style={{width:"650px", height:"140px", margin:"20px"}} onChange={this.handleChange} />

     
    </div>
    );
}
}
export default Editor;