import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import ScrollToTop from './components/scrollToTop'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {setCurrentTeacher,setCurrentStudent} from './actions'
import setAuthToken from './utils/setAuthToken';
  


// import Main from './Main';
// import Overview from './Overview';
// import Quizsettings from './QuizSettings';
// import TourPage from './TourPage';
// import NavbarPage from './Navbar';
// import Card from './card';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk))); 

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken)
    //decode token and get user
    const decoded=jwt_decode(localStorage.jwtToken)
    if(decoded.teacherid)
       store.dispatch(setCurrentTeacher(decoded))

    
    else if(decoded.studentid)
       store.dispatch(setCurrentStudent(decoded))
    
  
  }
ReactDOM.render( 
<Provider store={store}>
<BrowserRouter>
<ScrollToTop />
<App/> 

</BrowserRouter>
</Provider>, document.getElementById('root'));


