import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import TourPage from './TourPage';
import Quizsettings from './QuizSettings';
import Overview from './Overview';
import FooterPage from './Footer';
import Signup from './Signup';
import SignupSecond from './signupSecond'
import Login from './login';
import Contact from './contact';
import NavbarPage from'./Navbar';
import Main from './Main';

function PublicLayout(props){
return(
    <BrowserRouter>
    <div className="PublicLayout">
    <NavbarPage />
   
    <Switch>
     
      <Route  path="/signup" component={SignupSecond}></Route>
      <Route  path="/login" component={Login}></Route>
     <Route path="/tourpage" component={Overview}></Route>
     <Route path="/contact" component={Contact}></Route>
     <Route path="/overview" component={Overview}></Route>
     <Route path="/quizSettings" component={Quizsettings}></Route>
     <Route exact path="/" component={Main}></Route>
     </Switch>
     <FooterPage />
     </div>
    </BrowserRouter>
)
}

export default PublicLayout;