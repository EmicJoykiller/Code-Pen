// Define action type
const ADD = "ADD";

// Action Creator
const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

// Reducer Function
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]; // Append new message to state
    default:
      return state; // Return current state for unrecognized actions
  }
};

// Create Redux Store
const store = Redux.createStore(messageReducer);
