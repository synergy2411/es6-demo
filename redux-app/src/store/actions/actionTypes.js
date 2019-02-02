export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const STORE_RESULT = "STORE_RESULT";


export const increment = () => {
    return {
        type : INC_COUNTER
    }
}

export const asyncIncrement = () => {
    return (dispatch) => {
        $.ajax({method : "GET", url : 'http://date.jsontest.com'})
            .then(response=>{console.log(response)})
            .catch(err => console.log(err))
        setTimeout(()=>{
            dispatch(increment());
        }, 2000);
    }
}


//npm i serve -g