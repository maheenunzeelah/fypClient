import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer, formInputReducer, addQuesReducer,fetchTestReducer,currentTestReducer, fetchQuesReducer,fetchCourses} from './teacherReducer';
import {studentSignupReducer} from './studentReducer'
import {authReducer} from './authReducer';
export default combineReducers({
    form:formReducer,
    signup:signupReducer,
    ques:addQuesReducer,
    tests:fetchTestReducer,
    questions:fetchQuesReducer,
    //formInp:formInputReducer
    login:loginReducer,
    currentUser:authReducer,
    currentTest:currentTestReducer,
    student:studentSignupReducer,
    courses:fetchCourses
})