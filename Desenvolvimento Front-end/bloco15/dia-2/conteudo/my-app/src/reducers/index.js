// import { combineReducers } from 'redux';
// import myReducer from './myReducer';

// const rootReducer = combineReducers({ myReducer });

// export default rootReducer;

const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
};

export default listReducer;
