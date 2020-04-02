import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Test from './Test';
import Newtest from './Newtest';
import AddQues from './AddQues';
import EditTest from './EditTest';
import QuestionBank from './QuestionBank';
import New_Group from './New_Group';
import Group from './Group';


function PrivateLayout(){
    return(
        
        <BrowserRouter>
        <div>
       
         <Dashboard />
         
         <Switch>
         <Route exact path="/dashboard/addQues" component={AddQues}></Route>
           <Route exact path="/dashboard/newTest" exact component={Newtest}></Route>
           <Route exact path="/dashboard/editTest" component={EditTest}></Route>
           <Route path="/group" component={Group}></Route>
           <Route path="/newGroup" component={New_Group}></Route>
           <Route exact path="/dashboard/QuestionBank" component={QuestionBank}></Route>
           <Route exact path ="/dashboard" component={Test}>
           
           </Route>
           </Switch>
         </div>
         </BrowserRouter>
    );
}
export default PrivateLayout;