import React from 'react';
import {BrowserRouter, HashRouter, Route , Switch, Link,Router} from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Student/landing'
import Quiz from './Student/quiz'
import Setting from './Student/settings'
import createHistory from './history';
import Preview from '../components/Groups/Preview';
import PrivateStudentRoute from './privateStudentRoutes';


function PrivateStudentLayout(){
    return(
        
        <Router history={createHistory}>
           
        <div>
        
         <Dashboard />
         
         <Switch>
         <PrivateStudentRoute exact path ="/student" component={Landing} />
         <PrivateStudentRoute path ="/student/quiz" component={Quiz} />
         <PrivateStudentRoute path ="/student/settings/:id" component={Setting} />
       
           </Switch>
        
         </div>
         
         </Router>
    );
}
export default PrivateStudentLayout;