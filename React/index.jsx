const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT'; 

const counterReducer = (state = 0, action)=>{
  switch(action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}; 

const incAction = ()=>({type : INCREMENT});

const decAction = ()=>({type: DECREMENT});

const store = Redux.createStore(counterReducer);
console.log(store.getState()); // Output: 0
store.dispatch(incAction());
console.log(store.getState()); // Output: 1
store.dispatch(incAction());
console.log(store.getState()); // Output: 2
store.dispatch(decAction());
console.log(store.getState()); // Output: 1