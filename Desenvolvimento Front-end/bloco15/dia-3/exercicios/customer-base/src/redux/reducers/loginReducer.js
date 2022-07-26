import { LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  user: {},
};

const loginReducer = (state = INITIAL_STATE, action) => {
  // const { user } = action;
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};

export default loginReducer;

// import { LOGIN_ACTION } from '../actions';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
// };

// const loginReducer = (state = INITIAL_STATE, action) => {
//   const { email, password } = action;
//   switch (action.type) {
//     case LOGIN_ACTION:
//       return {
//         ...state,
//         email,
//         password,
//       };
//     default:
//       return state;
//   }
// };

// export default loginReducer;
