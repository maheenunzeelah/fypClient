export const studentReducer=(state={},action)=>{
    switch(action.type){
        case 'STUDENT_DATA':
        return action.payload;
        default:
        return state;
    }
}

export const studentTestReducer=(state={},action)=>{
    switch(action.type){
        case 'STUDENT_TEST':
        return action.payload;
        default:
        return state;
    }
}