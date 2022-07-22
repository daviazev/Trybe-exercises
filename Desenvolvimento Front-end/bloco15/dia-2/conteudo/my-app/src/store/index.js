import { createStore } from 'redux';
import { composeWithDevToolss } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevToolss());

export default store;
