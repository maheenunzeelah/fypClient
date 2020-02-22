import postDataApi from '../apis/postDataApi';
import  {SIGN_UP, LOG_IN} from './types';

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
        localStorage.setItem('jwtToken',response.data);
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