// 1. This file is just added as an empty file to the folder
// 2. Once added empty js file ran the below commands in the terminal
//         npm init -y
//         npm install redux  

const redux = require('redux'); // 1. Import statement in Node - importing redux 

// 3. Reducer funtion will receive 2 parameters
//      - param 1 => current state or old state 
//      - param 2 => dispatched action

const counterReducer = (state = {counter: 0}, action) => {
    return {counter: state.counter + 1}
};

const store = redux.createStore(counterReducer); // 2. Creating a store from redux

// 4. Subscription
const subscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// 5. Making subscription in the store
store.subscribe(subscriber);

// 6. Dipatch action
store.dispatch({type: 'increment'});

// Notes
// Install Redux = npm install redux
// 1. Run the JS file in Node = node .\redux-demo.js

 