import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch} from 'react-router-dom';
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
           <Route path="/newTest" component={Newtest}></Route>
           <Route path="/editTest" component={AddQues}></Route>
           <Route path="/QuestionBank" component={QuestionBank}></Route>
           <Route path ="/dashboard" component={Test}></Route>
       </Switch>
         </div>
         </BrowserRouter>
    );
}
export default PrivateLayout;