const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

console.log('1', INITIAL_STATE.colors);

function criarCor() {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case 'RANDOM-COLOR': {
      return {
        ...state,
        colors: [...state.colors, criarCor()],
      };
    }
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const randomColorButton = document.getElementById('random-color');

previousButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

randomColorButton.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM-COLOR' });
});

store.subscribe(() => {
  const currentColor = store.getState();
  document.getElementById('value').innerHTML =
    currentColor.colors[currentColor.index];

  document.getElementById('container').style.backgroundColor =
    currentColor.colors[currentColor.index];
});
