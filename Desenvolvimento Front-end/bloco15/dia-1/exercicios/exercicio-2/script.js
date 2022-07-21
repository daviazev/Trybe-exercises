const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'themeReducer':
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'statusReducer':
      return {
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    default:
      return state;
  }
};

const reducerCombinado = Redux.combineReducers({
  themeReducer,
  statusReducer,
});

const store = Redux.createStore(reducerCombinado);

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'themeReducer' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'statusReducer' });
});

store.subscribe(() => {
  const {
    statusReducer: { status },
  } = store.getState();
  document.getElementById('status').innerHTML = status;
  const statusButton = document.getElementById('toggle-status');
  status === 'offline'
    ? (statusButton.innerText = 'Ficar Online')
    : (statusButton.innerText = 'Ficar Offline');
});

store.subscribe(() => {
  const {
    themeReducer: { theme },
  } = store.getState();
  const body = document.querySelector('body');
  body.className = theme;
  theme === 'dark'
    ? (themeButton.innerText = 'Light Mode')
    : (themeButton.innerText = 'Dark Mode');
});
