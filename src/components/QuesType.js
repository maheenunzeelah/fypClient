import React , {Component} from 'react';

class QuesType extends Component{
    render(){
        return(
            <div className="container">
             <div className="row" >
              <div className="col-md-1">
               <button className=".btn-default">True/False</button>
                
              </div>&nbsp;
              <div className="col-md-1" >
              <button className=".btn-default">MCQ's</button>
               
              </div>

             </div>
             </div>

            
        )
    }
}
export default QuesType;
//style={{backgroundColor:"white", height:"40px"}}