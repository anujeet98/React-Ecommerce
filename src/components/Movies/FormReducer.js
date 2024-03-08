


const FormReducer = (state, action) => {
    if(action.type==='CLEAR_FORM'){
        const newState = {...state};
        Object.keys(newState).forEach((i) => newState[i] = '');
        return newState;
    }
    else if(action.type==='FORM_CHANGE') {
        return {
            ...state,
            [action.field]: action.value
        }
    }
    // switch(action.type){
    //     case "TITLE": {
    //         return {
    //             ...state,
    //             [action.field]: action.value
    //         }
    //     }
    //     case "OPENING_TEXT": {
    //         return {
    //             ...state,
    //             [action.field]: action.value
    //         }
    //     }
    //     case "RELEASE_DATE": {
    //         return {
    //             ...state,
    //             [action.field]: action.value
    //         }
    //     }
    //     default: {
    //         return state;
    //     }
    // }
}

export default FormReducer;