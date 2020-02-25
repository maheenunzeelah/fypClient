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
export const addQuesReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_QUEST_TYPE':
        return action.payload;
        default:
        return state;
    }
}

export const fetchTestRducer=(state={},action)=>{
    console.log(action.payload)
    switch(action.type){
       
        case 'FETCH_TESTS':
        return {...state, testName:action.payload}
        
        default:
        return state
    }
}