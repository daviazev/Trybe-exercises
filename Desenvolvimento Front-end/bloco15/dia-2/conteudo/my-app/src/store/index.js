// import { createStore } from 'redux';
// import { composeWithDevToolss } from 'redux-devtools-extension';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer, composeWithDevToolss());

// export default store;

import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/index';
import myReducer from '../reducers/myReducer';

const rootReducer = combineReducers({ listReducer, myReducer });

const store = createStore(rootReducer);

export default store;
