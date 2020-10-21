import React from 'react';
import axios from 'axios';
import '../css/card.css';
import Main from './PublicPages//Main';
import NavbarPage from'./PublicPages//Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TourPage from './PublicPages//TourPage';
import Quizsettings from './PublicPages//QuizSettings';
import Overview from './PublicPages/Overview';
import FooterPage from './PublicPages/Footer';
import Signup from './Authentication/Signup';
import Login from './Authentication/login';
import Contact from './PublicPages//contact';
import Dashboard from './Dashboard';
import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';
import setAuthToken from '../utils/setAuthToken';
import ScrollToTop from './scrollToTop';
import PrivateRoute from './privateRoute';
import PrivateStudentRoute from './privateStudentRoutes'
import PrivateStudentLayout from './PrivateStudentLayout'
import createHistory from './history';
import { Router } from 'react-router';



function App() {
  return (
  
   <BrowserRouter>
    
    <div className="App" style={{backgroundColor:"#f4d9c6"}}>
     <Switch>
    <PrivateStudentRoute path='/student' component={PrivateStudentLayout} />
     <PrivateRoute  path="/dashboard" component={PrivateLayout} />
     <Route  path="/" component={PublicLayout} /> 
    
      </Switch>     
    </div>      
                                
  </BrowserRouter>
 
 
  
  );
}

export default App;
