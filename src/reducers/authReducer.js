import {SET_CURRENT_USER} from '../actions/types';
import { isEmpty} from '../validation/is-empty';

const initialState ={
    isAuthenticated :false,
    userId: {}
};

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                userId:action.payload
            }
            default:
                    return state
    }
   
}