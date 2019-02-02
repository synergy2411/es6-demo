// npm init -y
// npm install redux --save

let redux = require("redux");

// Reducer
const initialState = {
    counter : 0
}

const reducer = (state = initialState, action) => {
    if(action.type === "INC_COUNTER"){
        return { counter : state.counter + action.data}
    }
    if(action.type === "DEC_COUNTER"){
        return {
            counter : state.counter + action.data
        }
    }
    return state;   
}

// Creating Store
const store= redux.createStore(reducer);
console.log(store.getState());


// Subscribing Store

store.subscribe(()=>{
    console.log("[SUBS]", store.getState());
});

// Dispatch Action
store.dispatch({type : "INC_COUNTER", data : 5});
// console.log("[After INC Action]",store.getState());
// store.dispatch({type : "DEC_COUNTER", data : 3});
// console.log("[After DEC Action]",store.getState());