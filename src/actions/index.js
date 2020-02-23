import postDataApi from '../apis/postDataApi';
import  {SIGN_UP, LOG_IN,SET_CURRENT_USER} from './types';
import setAuthtoken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const teacherSignup=(formValues)=>async (dispatch,getState)=>{
    
     await postDataApi.post('/signup',formValues)
     .then(response=>{
        
      localStorage.setItem('jwtToken',response.data);
      alert("Teacher Registered");
      window.location.reload();
  })
  .catch(err=>{
    alert(err.response.data.email );
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
export const teacherLogin=(formValues)=>async dispatch=>{
     await postDataApi.post('/login',formValues)
    .then(response=>{
        
        console.log(response.data)
        // saving token in response in localStorage
        localStorage.setItem('jwtToken',response.data);
        setAuthtoken(response.data);
        //Decoding token
        const decoded=jwt_decode(response.data);
        dispatch(setCurrentUser(decoded));
        alert("login");
        window.location.replace("/dashboard");
    })
    .catch(err=>{
      if(err.response.data.email===undefined)
      alert(err.response.data.password)
      if(err.response.data.email!==undefined)
      alert(err.response.data.email)
      window.location.reload();
    })
   // dispatch({type:LOG_IN, payload:response.data})
}  

export const createTest=(testName)=>async dispatch=>{
  console.log(testName)
  await postDataApi.post('/login/teacher',testName)
   .then(response=>{
     alert(response.data)
   })
   .catch(err=>{
     if(err.response.data.test!==undefined)
       alert(err.response.data.test);
      
   })
}
export const setCurrentUser=decoded=>{
return {
   type:SET_CURRENT_USER,
   payload: decoded
}

}