// import { createStore } from 'redux';
// import { composeWithDevToolss } from 'redux-devtools-extension';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer, composeWithDevToolss());

// export default store;

import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;
