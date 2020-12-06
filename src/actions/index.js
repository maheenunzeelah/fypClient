import postDataApi from '../apis/postDataApi';
import { SIGN_UP, LOG_IN, SET_CURRENT_TEACHER, SET_CURRENT_STUDENT, FETCH_TESTS, FETCH_QUESTIONS, CURRENT_TEST, FETCH_COURSES, GROUP_LIST, CURRENT_GROUP, STUDENT_TEST, QUESTION_LIST, CURRENT_GROUP_TEST, PROFILE_LOADING ,SET_SETTINGS} from './types';
import setAuthtoken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { Link, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import React from 'react';
import axios from 'axios';
import {Alert,AlertTitle} from '@material-ui/lab';

export const profileLoading = (bool) => {
  return {
    type: PROFILE_LOADING,
    payload: bool
  }
}
//TEACHER PANEL ACTION CREATORS
export const teacherSignup = (formValues) => async (dispatch, getState) => {
  console.log(formValues)
  dispatch(profileLoading())
  await postDataApi.post('/signup', formValues)
    .then(response => {

      localStorage.setItem('jwtToken', response.data.token);
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
  dispatch(profileLoading(true))

  await postDataApi.post('/login', formValues)
    .then(response => {
      dispatch(profileLoading(false))
      console.log(response.data.token)
      // saving token in response in localStorage
      localStorage.setItem('jwtToken', response.data.token);

      setAuthtoken(response.data.token)
      // //Decoding token
      const decoded = jwt_decode(response.data.token);
      console.log(decoded)
      dispatch(setCurrentTeacher(decoded));

      // window.location.replace("/dashboard");
    })
    .catch(err => {
      console.log(err)
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


      if (response.data === "Enter Test name")
        alert(response.data)
      else {
        alert("Test Created")
        dispatch({ type: CURRENT_TEST, payload: response.data._id })
      }
    })
    .catch(err => {
      if (err.response.data.test !== undefined)
        alert(err.response.data.test);

    })

}
export const setCurrentTeacher = decoded => {
  return {
    type: SET_CURRENT_TEACHER,
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
export const deleteQuestion = (id) => async dispatch => {
  console.log(id)
  await postDataApi.delete(`login/teacher/delQues/${id}`)
    .then(response => {
      alert(response.data)
      window.location.replace("/dashboard/QuestionBank")
    })

}
export const editQues = (data) => async (dispatch, getState) => {
  console.log(data);
  const currTest = getState().currentTest;
  data = { ...data, test: currTest }
  await postDataApi.put(`login/teacher/updateQues/${data.id}`, data)
    .then(response => {
      alert(response.data)
      window.location.replace("/dashboard/QuestionBank")
    })
    .catch(err => {
      if (err.response.data.question !== undefined)
        alert(err.response.data.question);
    })
}

export const fetchCourseList = () => async dispatch => {
  const response = await postDataApi.get('login/teacher/test/course');
  console.log(response.data)
  dispatch({ type: FETCH_COURSES, payload: response.data })
}

export const fetchTests = (page, course = '') => async dispatch => {
  console.log(course)
  dispatch(profileLoading(true))
  await postDataApi.get(`login/teacher/tests/${page}?course=${course}`).then(response => {

    dispatch({ type: FETCH_TESTS, payload: response.data })
    dispatch(profileLoading(false))

  })

  // console.log(response.data)


}

export const fetchQues = (page, filterQues = { course: '', type: '', search: '' }) => async dispatch => {
  console.log(filterQues)
  const response = await postDataApi.get(`login/teacher/readQues/${page}?course=${filterQues.course}&&type=${filterQues.type}&&search=${filterQues.search}`);
  console.log(response.data)
  dispatch({ type: FETCH_QUESTIONS, payload: response.data })
}

export const editTest = (id) => {
  return { type: CURRENT_TEST, payload: id }
}

export const updateTest = (data) => async dispatch => {
  console.log(data);
  await postDataApi.put(`login/teacher/updateTest/${data.id}`, data)
    .then(response => {
      alert(response.data)

    })
    .catch(err => {
      if (err.response.data.test !== undefined)
        alert(err.response.data.test);
    })
}
export const deleteTest = (id) => async dispatch => {
  await postDataApi.delete(`login/teacher/deleteTest/${id}`)
    .then(response => {
      alert(response.data)
      window.location.replace('/dashboard')
    })

}
// Groups
export const createGroup = (groupName) => async dispatch => {
  await postDataApi.post('login/teacher/createGroup', groupName)
    .then(response => {

      if (response.data === "Enter Group name")
        alert(response.data)
      else {
        alert("Group created");
        dispatch({ type: CURRENT_GROUP, payload: response.data._id })
        window.location.replace('/dashboard/group')
      }
    })
    .catch(err => {
      if (err.response.data.group !== undefined)
        alert(err.response.data.group);

    })
}
//fetch Groups list
export const groupList = (page) => async dispatch => {
  const response = await postDataApi.get(`login/teacher/groupList/${page}`)
  console.log(response.data)
  dispatch({ type: GROUP_LIST, payload: response.data })
}
//update group
export const updateGroup = (data) => async dispatch => {
  console.log(data);
  await postDataApi.put(`login/teacher/updateGroup/${data.id}`, data)
    .then(response => {
      alert(response.data)

    })
    .catch(err => {
      if (err.response.data.group !== undefined)
        alert(err.response.data.group);
    })
}
//delete group
export const deleteGroup = (id) => async dispatch => {
  await postDataApi.delete(`login/teacher/delGroup/${id}`)
    .then(response => {
      alert(response.data)
      window.location.replace('/dashboard')
    })

}
//fetch student list
export const fetchStudents = (value) => async dispatch => {
  dispatch(profileLoading(true))
  console.log(value.batch)
  await postDataApi.get(`login/teacher/fetchStudents/${value.batch}`).then(response => {

    dispatch({ type: 'FETCH_STUDENTS', payload: response.data })
    dispatch(profileLoading(false))
  })


}
//Current Group
export const editGroup = (id) => {
  console.log(id)
  return { type: CURRENT_GROUP, payload: id }
}
//add Students to group
export const AddStudents = (value) => async (dispatch, getState) => {
  console.log(value)
  await postDataApi.post(`login/teacher/addStudents/`, value)
    .then(response => {
      console.log(response.data)
    })
}
//assign test
export const AssignTestApi = (value) => async (dispatch, getState) => {
  console.log(value)
  await postDataApi.post(`login/teacher/assignTests/`, value)
    .then(response => {
      console.log(response.data)
      if (!response.data.resu){
        dispatch({ type: CURRENT_GROUP_TEST, payload: response.data.id })
      }
      else {
        console.log(response.data.id)
        alert('Already Assigned')
        dispatch({ type: CURRENT_GROUP_TEST, payload: response.data.id })
      }
    })
    .catch(err => {
      console.log(err)
    })
}
//Save Settings
export const saveSettings = (data) => async (dispatch,getState) => {
  data={...data, groupAssignedTestId:getState().currentGroupTest}
  dispatch({ type: SET_SETTINGS, payload: data })
  await postDataApi.post('login/teacher/saveSettings', data)
    .then(response => {
      
      alert(response.data.message)
    })
}

//get Settings
export const getSettings = (id) => async dispatch => {
 console.log(id);
  await postDataApi.get(`login/teacher/getSettings/${id}`)
    .then(response => {
      dispatch({type:SET_SETTINGS,payload:response.data})
    })

}

//STUDENT PANEL ACTION CREATORS
export const setCurrentStudent = decoded => {
  return {
    type: SET_CURRENT_STUDENT,
    payload: decoded
  }
}

export const studentSignup = (msg) => async (dispatch, getState) => {

  let formData = new FormData();

  //   for (var value of msg.values()) {
  //     console.log(value); 
  //  }
  var studentData = getState().student;

  await postDataApi.post('signup/student', studentData)

    .then(response => {
      console.log(response.data)
      localStorage.setItem('jwtToken', response.data.token);
      (async function voiceSignup() {
        console.log(msg)
        msg.map((form, index) => {
          form.id = response.data.id
          formData.append('data', form, form.id)

        })

        await postDataApi.post('signup/studentVoice', formData)
          .then(response => {
            // alert(response.data)
            localStorage.removeItem('jwtToken')
            dispatch(setCurrentStudent({}))
            window.location.replace('/signup');
          })
      })()


    })
    .catch(err => {
      alert(err.response.data.email);
      window.location.reload();
    })

}
export const studentFace = () => async dispatch => {
  await postDataApi.post('/signup/studentFace')
    .then(response => {
      if (response.data.face == "done") {
        dispatch({
          type: 'FACE_DONE',
          payload: true
        })
      }

    })
}

export const studentAuth = (formValues) => {
  console.log(formValues)
  return ({
    type: "STUDENT_DATA",
    payload: formValues
  })

}

export const studentLogin = (msg) => async (dispatch, getState) => {
  let formData = new FormData();
  var studentData = getState().student;
  await postDataApi.post('/login/student', studentData)
    .then(response => {
      const token = response.data.token
      if (response.data.id) {
        (async function voiceAuth() {
          msg.map(form => {
            form.id = response.data.id
            console.log(form)
            formData.append('data', form, form.id)
          })

          await postDataApi.post('login/studentVoiceAuth', formData)
            .then(response => {
              // saving token in response in localStorage
              localStorage.setItem('jwtToken', token);

              setAuthtoken(token)
              // //Decoding token
              const decoded = jwt_decode(token);
              console.log(decoded)
              dispatch(setCurrentStudent(decoded));
              alert('login')

            })
        })()
      }
      // saving token in response in localStorage
      // localStorage.setItem('jwtToken', response.data);


      // //Decoding token
      // const decoded=jwt_decode(response.data);
      // dispatch(setCurrentUser(decoded));

    })
    .catch(err => {
      if (err.response.data.email === undefined)
        alert(err.response.data.password)
      if (err.response.data.email !== undefined)
        alert(err.response.data.email)
      window.location.reload();
    })

}
export const faceLogin = () => async dispatch => {
  await postDataApi.post('/login/studentFace')
    .then(response => {
      console.log("doneee")
      if (response.data.face == "done") {
        dispatch({
          type: 'FACE_DONE',
          payload: true
        })
      }

    })
}
//groups of Student
export const groupTest = () => async (dispatch, getState) => {
  const id = getState().auth.user.studentid
  const response = await postDataApi.get(`/student/groupTest/${id}`)
  dispatch({ type: GROUP_LIST, payload: response.data })
}

//tests of Student
export const studentTest = () => async (dispatch, getState) => {
  const id = getState().auth.user.studentid
  const response = await postDataApi.get(`/student/groupTest/${id}`)
  dispatch({ type: GROUP_LIST, payload: response.data })
}
//questions for student's test
export const quesList = (id) => async dispatch => {
  await postDataApi.get(`/student/test/${id}`)
    .then(response => {
      console.log(response.data)
      dispatch({ type: QUESTION_LIST, payload: response.data })

    }
    )
}

//Result of students
export const result = (answers, test, score, perct) => async dispatch => {
  const data = {answers, test, score, perct }
  console.log
    (data)
  await postDataApi.post('/student/result', data)
    .then(response => {
      alert('saved')
    })
    .catch(err => {
      console.log(err)
    })
}

// logout
export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthtoken(false)
  dispatch(setCurrentTeacher({}))
  dispatch(setCurrentStudent({}))
}