import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import TourPage from './PublicPages/TourPage';
import Quizsettings from './PublicPages/QuizSettings';
import Overview from './PublicPages/Overview';
import FooterPage from './PublicPages/Footer';
import Signup from './Authentication/Signup';
import RoleSelection from './Authentication/roleSelection';
import SignupSecond from './Authentication/signupSecond'
import Login from './Authentication/login';
import Contact from './PublicPages/contact';
import NavbarPage from'./PublicPages/Navbar';
import Main from './PublicPages/Main';
import signupFirst from './Authentication/signupFirst';
import {pageNotFound} from './404page';
import PrivateLayout from './PrivateLayout';


function PublicLayout(props){
return(
    <BrowserRouter>
    <div className="PublicLayout">
    
    <NavbarPage />
   
    <Switch>
     <Route exact path="/" component={Main}></Route>
     <Route path="/signup" component={Signup}></Route>
     <Route path="/signupas" component={RoleSelection}></Route>
     <Route path="/login" component={Login}></Route>
     <Route path="/tourpage" component={Overview}></Route>
     <Route path="/contact" component={Contact}></Route>
     <Route path="/overview" component={Overview}></Route>
     <Route path="/quizSettings" component={Quizsettings}></Route>
      <Route component={pageNotFound} />    
     </Switch>
     <FooterPage />
     </div>
    </BrowserRouter>
)
}

export default PublicLayout;