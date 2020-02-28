import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer, formInputReducer, addQuesReducer,fetchTestReducer, fetchQuesReducer} from './teacherReducer';
import {authReducer} from './authReducer';
export default combineReducers({
    form:formReducer,
    signup:signupReducer,
    ques:addQuesReducer,
    tests:fetchTestReducer,
    questions:fetchQuesReducer,
    //formInp:formInputReducer
    login:loginReducer,
    currentUser:authReducer
})