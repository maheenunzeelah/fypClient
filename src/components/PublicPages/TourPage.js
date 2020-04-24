import React from 'react';
import NavbarPage from './Navbar';
import Card from './card';
import Footer from './Footer';
import Overview from './Overview';
import QuizSettings from './QuizSettings';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
function TourPage(){
    return(
        <BrowserRouter>
       <div className="TourPage">
           <Switch></Switch>
       </div>
       </BrowserRouter>
    );
}
export default TourPage;