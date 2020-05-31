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


 axios.defaults.headers.common['authorization'] = localStorage.getItem('jwtToken');
axios.interceptors.request.use(function (config) {
  // spinning start to show
  const token = localStorage.getItem("jwtToken");
  if (token) {
     config.headers.Authorization = token
     
  }
  return config
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  return response;

}, function (error) {

  if (401 === error.response.status) {
     window.location='http://localhost:3000';

  } else {

      return Promise.reject(error);

  }

});

function App() {
  return (
  
   <BrowserRouter >
    
    <div className="App">
     <Switch>
     <Route path="/dashboard" component={PrivateLayout} />
      <Route  path="/" component={PublicLayout} /> 
          
      </Switch>     
    </div>      
                                
  </BrowserRouter>
 
 
  
  );
}

export default App;
