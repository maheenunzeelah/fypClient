import React from 'react';
import Dashboard from './Dashboard' ;
import { BrowserRouter, Route, Switch } from "react-router-dom";
function Account(match){
    return(
       
        <div className="Account">
       <Route path={match.url+"/dashboard"} component={Dashboard}/>
        </div>
        
    );
}
export default Account;