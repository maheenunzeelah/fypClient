import {SET_CURRENT_TEACHER, SET_CURRENT_STUDENT} from '../actions/types';
import { isEmpty} from '../validation/is-empty';

const initialState ={
    isAuthenticatedTeacher :false,
    isAuthenticatedStudent:false,
    user: {}
};

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_TEACHER:
            return{
                ...state,
                isAuthenticatedTeacher:!isEmpty(action.payload),
                user:action.payload
            }
         case SET_CURRENT_STUDENT:
            return{
                ...state,
                isAuthenticatedStudent:!isEmpty(action.payload),
                user:action.payload
            }   
            default:
                    return state
    }
   
}