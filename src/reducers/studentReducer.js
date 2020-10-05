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
export const questionListReducer=(state={},action)=>{
    switch(action.type){
        case 'QUESTION_LIST':
        return action.payload;
        default:
        return state;
    }
}
export const faceReducer=(state={face:false},action)=>{
    switch(action.type){
        case 'FACE_DONE':
            return action.payload
            default:
            return state;
    }

}
