// import { createStore } from 'redux';
// import { composeWithDevToolss } from 'redux-devtools-extension';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer, composeWithDevToolss());

// export default store;

// src/store/index.js
import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // A linha acima não é obrigatória, serve apenas para visualizar
  // a extensão "Redux Devtools", caso você tenha instalado.
);

export default store;
