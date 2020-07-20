import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link,Router} from 'react-router-dom';
import Dashboard from './Dashboard';

import Quiz from './Student/quiz'
import createHistory from './history';
import PrivateStudentRoute from './privateStudentRoutes';


function PrivateStudentLayout(){
    return(
        
        <Router history={createHistory}>
           
        <div>
        
         <Dashboard />
         
         <Switch>
         <PrivateStudentRoute path ="/student/quiz" component={Quiz}></PrivateStudentRoute>
         
           
           </Switch>
        
         </div>
         
         </Router>
    );
}
export default PrivateStudentLayout;