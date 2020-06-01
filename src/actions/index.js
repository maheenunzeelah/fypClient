import postDataApi from '../apis/postDataApi';
import { SIGN_UP, LOG_IN, SET_CURRENT_USER, FETCH_TESTS, FETCH_QUESTIONS, CURRENT_TEST, FETCH_COURSES} from './types';
import setAuthtoken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { Link, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import React from 'react';
import postFilApi from '../apis/postFilApi';


function onClick(){
  alert("hello")
}

//TEACHER PANEL ACTION CREATORS
export const teacherSignup = (formValues) => async (dispatch, getState) => {
  console.log(formValues)
  await postDataApi.post('/signup', formValues)
    .then(response => {

      localStorage.setItem('jwtToken', response.data);
      alert("Teacher Registered");
      window.location.reload();
    })
    .catch(err => {
      alert(err.response.data.email);
      window.location.reload();
    })
  //dispatch({type:SIGN_UP, payload:response.data})
}
// export const formInputs=(formValues)=>{
//     console.log(formValues)
//     return {
//         type:'FORM_INPUTS',
//         payload:formValues
//     }
// }
export const teacherLogin = (formValues) => async dispatch => {
  await postDataApi.post('/login', formValues)
    .then(response => {

      console.log(response.data)
      // saving token in response in localStorage
      localStorage.setItem('jwtToken', response.data);


      // //Decoding token
      // const decoded=jwt_decode(response.data);
      // dispatch(setCurrentUser(decoded));
      alert("login");
      window.location.replace("/dashboard");
    })
    .catch(err => {
      if (err.response.data.email === undefined)
        alert(err.response.data.password)
      if (err.response.data.email !== undefined)
        alert(err.response.data.email)
      window.location.reload();
    })
  // dispatch({type:LOG_IN, payload:response.data})
}

export const createTest = (testName) => async dispatch => {
  console.log(testName)
  await postDataApi.post('/login/teacher', testName)
    .then(response => {
      //var result =window.confirm(response.data)

      
      if(response.data==="Enter Test name")
      alert(response.data)
      else{
      alert("Test created");
      dispatch({ type: CURRENT_TEST, payload: response.data._id })}
    })
    .catch(err => {
      if (err.response.data.test !== undefined)
        alert(err.response.data.test);

    })

}
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }

}
export const quesType = (quesType) => {
  return {
    type: 'SET_QUEST_TYPE',
    payload: quesType
  }
}

export const addQues = (formValues) => async (dispatch, getState) => {
  const val = getState().ques;
  const currTest = getState().currentTest;
  const newformValues = { ...formValues, type: val, test: currTest }
  await postDataApi.post('login/teacher/addQues', newformValues)
    .then(response => {
      
      alert(response.data);
        window.location.replace('/dashboard/addQues');    

    })
    .catch(err => {
      if (err.response.data.ques !== undefined)
        alert(err.response.data.ques);

    })
}
// delete question action creators
export const deleteQuestion=(id)=>async dispatch=>{
  console.log(id)
  await postDataApi.delete(`login/teacher/delQues/${id}`)
  .then(response=>{
    alert(response.data)
    window.location.replace("/dashboard/QuestionBank")
  })

}
export const editQues=(data)=>async (dispatch,getState)=>{
  console.log(data);
  const currTest = getState().currentTest;
  data={ ...data, test: currTest }
  await postDataApi.put(`login/teacher/updateQues/${data.id}`,data)
   .then(response=>{
     alert(response.data)
     window.location.replace("/dashboard/QuestionBank")
   })
   .catch(err => {
     if (err.response.data.question !== undefined)
       alert(err.response.data.question);})
}

export const fetchCourseList=()=>async dispatch=>{
  const response=await postDataApi.get('login/teacher/test/course');
  console.log(response.data)
  dispatch({type: FETCH_COURSES ,payload:response.data})
}

export const fetchTests = (page,course='') => async dispatch => {
  console.log(course)
  const response = await postDataApi.get(`login/teacher/tests/${page}?course=${course}`);
  console.log(response.data)
  dispatch({ type: FETCH_TESTS, payload: response.data })
}

export const fetchQues = (page,filterQues={course:'',type:'',search:''}) => async dispatch => {
  console.log(filterQues)
  const response = await postDataApi.get(`login/teacher/readQues/${page}?course=${filterQues.course}&&type=${filterQues.type}&&search=${filterQues.search}`);
   console.log(response.data)
  dispatch({ type: FETCH_QUESTIONS, payload: response.data })
}

export const editTest=(id)=>{
  return{ type: CURRENT_TEST, payload:id }
}

export const updateTest=(data)=>async dispatch=>{
  console.log(data);
 await postDataApi.put(`login/teacher/updateTest/${data.id}`,data)
  .then(response=>{
    alert(response.data)

  })
  .catch(err => {
    if (err.response.data.test !== undefined)
      alert(err.response.data.test);})
}
export const deleteTest=(id)=>async dispatch=>{
  await postDataApi.delete(`login/teacher/deleteTest/${id}`)
   .then(response=>{
     alert(response.data)
     window.location.replace('/dashboard')
   })
   .then()
}

//STUDENT PANEL ACTION CREATORS
export const sendVoice=(msg)=>async (dispatch,getState) =>{
 
  var studentData=getState().student;
  const data={...studentData,msg}
  await postDataApi.post('signup/student',data)
  // .then(response => {
  
  //   localStorage.setItem('jwtToken', response.data);
  //   alert("Student Registered");
  //   window.location.replace('/signup');
  // })
  // .catch(err => {
  //   alert(err.response.data.email);
  //   window.location.reload();
  // })
   
}
export const studentSignup = (formValues)  => {
  console.log(formValues)
 return ({
    type:"STUDENT_DATA",
    payload:formValues
 })
    
}

