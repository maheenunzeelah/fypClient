export const signupReducer=(state={},action)=>{
    switch(action.type){
        case 'SIGN_UP':
            const newState={...state,token:action.payload}
            return newState;
       
         default:
             return state;   
    }
}
// export const formInputReducer=(state={},action)=>{
//     switch(action.type){
//         case 'FORM_INPUTS':
//             //console.log(action.payload);
//             return action.payload
            
//         default:
//             return state    
//     }
// }
export const loginReducer=(state={}, action)=>{
    switch(action.type){
        case 'LOG_IN':
                let newState={...state,token:action.payload}
                return newState;
           
             default:
                 return state; 
    }
}