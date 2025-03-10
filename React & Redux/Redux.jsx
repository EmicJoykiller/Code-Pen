// Define ADD 

const ADD = 'ADD';

//addMessage()
function addMessage(message){
    return{
        type: ADD,
        message: message
    };
};

//messageReducer()

function messageReducer(state = [], action){
    switch(action.type){
        case ADD:
            return [...state, action.message]
        default:
            return state;
    };
};

//and store here:

const store = Redux.createStore(messageReducer);