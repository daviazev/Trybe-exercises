import { REGISTER_ACTION } from '../actions';

const INITIAL_STATE = {
  usersRegistereds: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_ACTION:
      return {
        ...state,
        usersRegistereds: [action.payload, ...state.usersRegistereds],
      };
    default:
      return state;
  }
};

export default registerReducer;
