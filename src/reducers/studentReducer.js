export const studentSignupReducer=(state={},action)=>{
    switch(action.type){
        case 'STUDENT_DATA':
        return action.payload;
        default:
        return state;
    }
}