import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer, formInputReducer} from './teacherReducer';
import {authReducer} from './authReducer';
export default combineReducers({
    form:formReducer,
    signup:signupReducer,
    //formInp:formInputReducer
    login:loginReducer,
    currentUser:authReducer
})