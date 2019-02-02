import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: {
            let arr = state.result.slice();
            arr.push({ value: action.value, id: (+new Date()) });
            return {
                ...state,
                result: arr
            }
        }
        case actionTypes.REMOVE_ITEM: {
            let arr = state.result.filter(element => {
                element.id != action.id
            });
            return {
                ...state,
                result: arr
            }
        }
        default: return state;
    }
}

export default reducer;


// export const reducer = (state = initialState, action) => {
//     return state;
// }