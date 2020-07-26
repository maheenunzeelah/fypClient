import React from 'react';
import Overview from './Overview';
import Video from './Video';
import {BrowserRouter, Route, Switch , withRouter} from 'react-router-dom';

function Card(){
return(
    <div className="card pink-text " style={{backgroundColor:"rgb(1, 4, 20)" }}>
     <div className="row">
     <div className="col-lg-1"></div>
     <div className="col-lg-4">
     <div className="list-group " style={{width:'300px' , margin:"20px auto 20px 30px" }} >
        <button type="button" className="list-group-item list-group-item-secondary  list-group-item-action " >
         <a className="navbar-brand pink-text " href="/tourpage" >Overview</a>
        </button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action " ><a href="/quizSettings" className="pink-text ">Quiz Settings</a></button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text ">Quiz Results</button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text ">Quiz Access</button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text ">API/ Integrate</button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text ">Customers</button>
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