// const Redux = require('redux');

// const fazerLogin = (email) => ({
//   type: 'LOGIN',
//   email,
// });

// const ESTADO_INICIAL = {
//   login: false,
//   email: 'davi@olindo.com',
//   age: 23,
// };

// const reducer = (state = ESTADO_INICIAL, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         login: !state.login,
//         email: action.email,
//       };
//     default: // No switch, sempre precisamos ter um caso default!
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin('davi@olindo.com.eu'));

// console.log(store);

// console.log(store.getState());

// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer.js';
import meuOutroReducer from './meuOutroReducer.js';
import { createStore } from 'redux';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer,
});

export default reducerCombinado;
