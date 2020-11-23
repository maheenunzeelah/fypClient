import { SET_CURRENT_TEACHER, SET_CURRENT_STUDENT, PROFILE_LOADING } from '../actions/types';
import { isEmpty } from '../validation/is-empty';
import { stat } from 'fs';

const initialState = {
    isAuthenticatedTeacher: false,
    isAuthenticatedStudent: false,
    user: {},

};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TEACHER:
            return {
                ...state,

                isAuthenticatedTeacher: !isEmpty(action.payload),
                user: action.payload
            }
        case SET_CURRENT_STUDENT:
            return {
                ...state,

                isAuthenticatedStudent: !isEmpty(action.payload),
                user: action.payload
            }

        default:
            return state
    }

}

export const profileLoadingReducer = (state = { loading: false },action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
               ...state,loading:action.payload
            }
            default:
            return state
    }

}
