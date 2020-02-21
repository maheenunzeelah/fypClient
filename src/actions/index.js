import postDataApi from '../apis/postDataApi';
import  {SIGN_UP, LOG_IN} from './types';

export const teacherSignup=(formValues)=>async (dispatch,getState)=>{
    
    const response = await postDataApi.post('/signup',formValues);
    dispatch({type:SIGN_UP, payload:response.data})
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
      alert(err.response.data.email)
    })
   // dispatch({type:LOG_IN, payload:response.data})
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       