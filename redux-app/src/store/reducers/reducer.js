import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INC_COUNTER: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case actionTypes.DEC_COUNTER: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case actionTypes.ADD_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.value
            }
        }
        case actionTypes.SUBSTRACT_COUNTER: {
            return {
                ...state,
                counter: state.counter - action.value
            }
        }
        case actionTypes.STORE_RESULT: {
            let arr = state.result.slice();
            arr.push({ value: state.counter, id: (+new Date()) });
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