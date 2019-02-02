import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import reducer from './store/reducers/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import * as actionTypes from './store/actions/actionTypes';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("[Middleware ACTION]", action);
            console.log("[Middleware STATE]", store.getState());
            return next(action);
        }
    }
}

// Combining Reducers

const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
});

// Creating Store
// let store = createStore(reducer);
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

// Accessing State from Store
let state = store.getState();
let bool = false;

// UI Update
const updateUI = () => {
    $("span").text(state.ctr.counter);
}

// Remove Item on Click
const addRemoveListener = (id) => {
    $("#" + id).on("click", () => {
        store.dispatch({ type: actionTypes.REMOVE_ITEM, id: id });
        $("#" + id).remove();
    })
}

// Showing List Item 
const createListItem = () => {
    $("ul").append(`
        <li class="list-group-item" id = "${state.res.result[state.res.result.length - 1].id}"> 
            ${state.res.result[state.res.result.length - 1].value}
        </li>
    `)
    addRemoveListener(state.res.result[state.res.result.length - 1].id);
    bool = false;
}

$(document).ready(() => {
    
    //Subscribe when state changes
    store.subscribe(() => {
        state = store.getState();
        console.log("[SUBS]", state);
        updateUI();
        if (bool) {
            createListItem();
        }
    })

    updateUI();

    $("button").on("click", (event) => {
        switch (event.target.id) {
            case "btnIncrease": {
                store.dispatch(actionTypes.asyncIncrement());
                break;
            }
            case "btnDecrease": {
                store.dispatch({ type: actionTypes.DEC_COUNTER });
                break;
            }
            case "btnAdd": {
                store.dispatch({ type: actionTypes.ADD_COUNTER, value: 10 });
                break;
            }
            case "btnSubstract": {
                store.dispatch({ type: actionTypes.SUBSTRACT_COUNTER, value: 5 });
                break;
            }
            case "btnStore": {
                bool = true;
                store.dispatch({ type: actionTypes.STORE_RESULT, value : state.ctr.counter });
            }
        }
    })
});