import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Test from './Test';
import Newtest from './Newtest';
import AddQues from './AddQues';
import QuestionBank from './QuestionBank';




function PrivateLayout(){
    return(
        
        <BrowserRouter>
        <div>
       
         <Dashboard />
         
         <Switch>
         <Route exact path="/editTest" component={AddQues}></Route>
           <Route path="/newTest" component={Newtest}></Route>
           
           <Route path="/QuestionBank" component={QuestionBank}></Route>
           <Route path ="/dashboard" component={AddQues }></Route>
           </Switch>
         </div>
         </BrowserRouter>
    );
}
export default PrivateLayout;