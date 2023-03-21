// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
//   global.fetch = jest.fn().mockResolvedValue({
//     json: jest.fn().mockResolvedValue({
//       id: '7h3oGtr0fx',
//       joke: 'Whiteboards ... are remarkable',
//       status: 200,
//     }),
//   });

//   render(<App />);

//   const teste = await screen.findByText('Whiteboards ... are remarkable');
//   expect(teste).toBeInTheDocument();
// });

// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke 1', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);

  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.'
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});

it('fetches a joke 2', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(joke),
    })
  );

  render(<App />);
  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.'
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});
