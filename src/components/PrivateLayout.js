import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Test from './Tests/Test';
import ScrollToTop from './scrollToTop'
import Newtest from './Tests/Newtest';
import AddQues from './Questions/AddQues';
import EditQues from './Questions/EditQues';
import EditTest from './Tests/EditTest';
import QuestionBank from './Questions/QuestionBank';
import New_Group from './Groups/New_Group';
import Group from './Groups/Group';


function PrivateLayout(){
    return(
        
        <BrowserRouter>
           
        <div>
        
         <Dashboard />
         
         <Switch>
           <Route exact path="/dashboard/addQues" component={AddQues}></Route>
           <Route path="/dashboard/editQues" component={EditQues} ></Route>
           <Route exact path="/dashboard/newTest" exact component={Newtest}></Route>
           <Route exact path="/dashboard/editTest" component={EditTest}></Route>
           <Route path="/group" component={Group}></Route>
           <Route path="/newGroup" component={New_Group}></Route>
           <Route exact path="/dashboard/QuestionBank" component={QuestionBank}></Route>
           <Route exact path ="/dashboard" component={Test}></Route>
           </Switch>
        
         </div>
         
         </BrowserRouter>
    );
}
export default PrivateLayout;