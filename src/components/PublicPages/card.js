import React from 'react';
import Overview from './Overview';
import Video from './Video';
import {BrowserRouter, Route, Switch , withRouter} from 'react-router-dom';

function Card(){
return(
    <div className="card" style={{backgroundColor:"rgb(1, 4, 20)" , color:"rgb(183, 240, 240"}}>
     <div className="row">
     <div className="col-lg-1"></div>
     <div className="col-lg-4">
     <div className="list-group" style={{width:'300px' , margin:"20px auto 20px 30px" ,backgroundColor:'#bbdefb'}} >
        <button type="button" class="list-group-item list-group-item-primary list-group-item-action active" >
         <a className="navbar-brand" href="/tourpage" style={{color:"white"}}>Overview</a>
        </button>
        <button type="button" className="list-group-item list-group-item-success list-group-item-action" ><a href="/quizSettings">Quiz Settings</a></button>
        <button type="button" className="list-group-item list-group-item-success list-group-item-action">Quiz Results</button>
        <button type="button" className="list-group-item list-group-item-success list-group-item-action">Quiz Access</button>
        <button type="button" className="list-group-item list-group-item-success list-group-item-action">API/ Integrate</button>
        <button type="button" className="list-group-item list-group-item-success list-group-item-action">Customers</button>
    </div>
    </div>
    <div className="col-lg-7" style={{marginTop:"20px"}}>
    <Video />
    </div>
    </div>
   </div>
);
}

export default Card;