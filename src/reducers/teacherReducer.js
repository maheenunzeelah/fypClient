


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
export const fetchCourses=(state=[],action)=>{
    switch(action.type){
       
        case 'FETCH_COURSES':
        return action.payload
        
        default:
        return state
    }
}

export const fetchTestReducer=(state={},action)=>{
    switch(action.type){
       
        case 'FETCH_TESTS':
        return {...state,tests:action.payload}
        
        default:
        return state
    }
}
export const fetchQuesReducer=(state={},action)=>{
    // console.log(action.payload)
    switch(action.type){
       
        case 'FETCH_QUESTIONS':
        return {...state,question:action.payload}
        
        default:
        return state
    }
}
export const currentTestReducer=(state={}, action)=>{
    
    switch(action.type){
       
        case 'CURRENT_TEST':
        return action.payload   
        
        default:
        return state
    }
}
export const currentGroupTest=(state={}, action)=>{
    switch(action.type){
       
        case 'CURRENT_GROUP_TEST':
        return action.payload   
        
        default:
        return state
    }
}
export const groupListReducer=(state={}, action)=>{
    
    switch(action.type){
       
        case 'GROUP_LIST':
        return action.payload   
        
        default:
        return state
    }
}
export const currentGroupReducer=(state={}, action)=>{
    
    switch(action.type){
       
        case 'CURRENT_GROUP':
        return action.payload   
        
        default:
        return state
    }
}
export const fetchStudentsReducer=(state={},action)=>{
    switch(action.type){
        case 'FETCH_STUDENTS':
        return action.payload
        default:
        return state
    }
}

export const setSettingsReducer=(state={},action)=>{
    switch(action.type){
        case'SET_SETTINGS':
         return action.payload
        default:
         return state 
    }
}