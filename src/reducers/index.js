import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer, formInputReducer, addQuesReducer,fetchTestReducer,currentTestReducer, fetchQuesReducer,fetchCourses,fetchStudentsReducer,groupListReducer,currentGroupReducer,currentGroupTest, setSettingsReducer} from './teacherReducer';
import {studentReducer,studentTestReducer,questionListReducer,faceReducer} from './studentReducer'
import {authReducer,profileLoadingReducer} from './authReducer';
export default combineReducers({
    form:formReducer,
    signup:signupReducer,
    ques:addQuesReducer,
    tests:fetchTestReducer,
    questions:fetchQuesReducer,
    //formInp:formInputReducer
    currentGroupTest:currentGroupTest,
    loading:profileLoadingReducer,
    studentList:fetchStudentsReducer,
    studentTest:studentTestReducer,
    face:faceReducer,
    login:loginReducer,
    auth:authReducer,
    groupsList:groupListReducer,
    currentTest:currentTestReducer,
    currentGroup:currentGroupReducer,
    student:studentReducer,
    filter:fetchCourses,
    questionList:questionListReducer,
    settings: setSettingsReducer
})