// src/App.test.js

import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('testando clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /clique aqui/i })).toBeDefined();
  });

  // Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('5 clicks in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);

    const button = screen.getByRole('button', { name: /clique aqui/i });
    for (let i = 0; i < 5; i += 1) {
      userEvent.click(button);
    }

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('bla bla', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 10 } },
    });

    const button = screen.getByRole('button', { name: /clique aqui/i });

    for (let i = 0; i < 5; i += 1) {
      userEvent.click(button);
    }

    expect(screen.getByText('15')).toBeInTheDocument();
  });
});
