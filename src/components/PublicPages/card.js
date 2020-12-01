import React from 'react';
import Overview from './Overview';
import Video from './Video';
import {Link} from 'react-router-dom';

function Card(){
return(
    <div className="card pink-text font-weight-bold " style={{backgroundColor:"rgb(1, 4, 20)" }}>
     <div className="row">
     <div className="col-lg-1"></div>
     <div className="col-lg-4">
     <div className="list-group " style={{width:'300px' , margin:"20px auto 20px 30px" }} >
     <Link  to="/tourpage" > <button type="button" className="list-group-item list-group-item-secondary  list-group-item-action pink lighten-5 mb-5 mt-5" >
        <p className="pink-text">Overview</p>
        </button></Link>
        <Link to="/quizSettings" className="pink-text "><button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink lighten-5" ><p className="pink-text">Quiz Settings</p></button></Link>
        {/* <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text  pink lighten-5 ">Quiz Results</button> */}
        {/* <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text  pink lighten-5">Quiz Access</button>
        <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text  pink lighten-5">API/ Integrate</button> */}
        {/* <button type="button" className="list-group-item list-group-item-secondary list-group-item-action pink-text  pink lighten-5">Customers</button> */}
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