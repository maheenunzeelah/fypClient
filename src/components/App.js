import React from 'react';
import axios from 'axios';
import '../css/card.css';
import Main from './Main';
import NavbarPage from'./Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TourPage from './TourPage';
import Quizsettings from './QuizSettings';
import Overview from './Overview';
import FooterPage from './Footer';
import Signup from './signup';
import Login from './login';
import Contact from './contact';
import Dashboard from './Dashboard';
import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';
import setAuthToken from '../utils/setAuthToken';



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
  

   <BrowserRouter>
   <div className="App">
     <Switch>
     <Route   path="/dashboard" component={PrivateLayout} />
      <Route  path="/" component={PublicLayout} /> 
              
      </Switch>                                                      
  </div>
  </BrowserRouter>
 

  
  );
}

export default App;
