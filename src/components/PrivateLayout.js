import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link,Router} from 'react-router-dom';
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
import createHistory from './history';
import PrivateRoute from './privateRoute';


function PrivateLayout(){
    return(
        
        <Router history={createHistory}>
           
        <div>
        
         <Dashboard />
         
         <Switch>
         <PrivateRoute exact path ="/dashboard" component={Test}></PrivateRoute>
           <PrivateRoute  path="/dashboard/addQues" component={AddQues}></PrivateRoute>
           <PrivateRoute path="/dashboard/editQues" component={EditQues} ></PrivateRoute>
           <PrivateRoute  path="/dashboard/newTest" exact component={Newtest}></PrivateRoute>
           <PrivateRoute  path="/dashboard/editTest" component={EditTest}></PrivateRoute>
           <PrivateRoute path="/dashboard/group" component={Group}></PrivateRoute>
           <PrivateRoute path="/dashboard/newGroup" component={New_Group}></PrivateRoute>
           <PrivateRoute path="/dashboard/QuestionBank" component={QuestionBank}></PrivateRoute>
           
           </Switch>
        
         </div>
         
         </Router>
    );
}
export default PrivateLayout;