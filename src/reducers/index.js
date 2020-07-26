import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer, formInputReducer, addQuesReducer,fetchTestReducer,currentTestReducer, fetchQuesReducer,fetchCourses,fetchStudentsReducer} from './teacherReducer';
import {studentReducer} from './studentReducer'
import {authReducer} from './authReducer';
export default combineReducers({
    form:formReducer,
    signup:signupReducer,
    ques:addQuesReducer,
    tests:fetchTestReducer,
    questions:fetchQuesReducer,
    //formInp:formInputReducer
    studentList:fetchStudentsReducer,
    login:loginReducer,
    auth:authReducer,
    currentTest:currentTestReducer,
    student:studentReducer,
    filter:fetchCourses
})