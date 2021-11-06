// 1. This file is just added as an empty file to the folder
// 2. Once added empty js file ran the below commands in the terminal
//         npm init -y
//         npm install redux  

const redux = require('redux'); // 1. Import statement in Node - importing redux 

// 3. Reducer funtion will receive 2 parameters
//      - param 1 => current state or old state
//      - param 2 => dispatched action

const counterReducer = (state, action) => {
    return {counter: state.counter + 1}
};

const store = redux.createStore(); // 2. Creating a store from redux



 