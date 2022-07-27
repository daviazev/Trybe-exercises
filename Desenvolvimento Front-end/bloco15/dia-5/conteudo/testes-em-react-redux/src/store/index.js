// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

export const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;
