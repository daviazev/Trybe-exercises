import { render, screen } from '@testing-library/react';
import App from './App';

it('verifica se tem um input na tela', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // const mytest = screen.getByText(/teste/i);
  // expect(mytest).toBeInTheDocument();
  // expect(linkElement).toBeInTheDocument();

  const inputName = screen.getByLabelText('Name');

  expect(inputName).toBeInTheDocument();
  expect(inputName.type).toBe('text');
});

it('Verifica se há dois botões na tela', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

it('Verifica se existe o botão "Virus" na tela', () => {
  render(<App />);

  const virusButton = screen.getByTestId('virus');

  expect(virusButton).toBeInTheDocument();
  expect(virusButton).toHaveTextContent('Vírus grátis'); // do texto dentro do componente
  expect(virusButton).toHaveValue('Vírus grátis'); // da propriedade value
});

it('Verifica se existe o botão "Clique" na tela', () => {
  render(<App />);

  const cliqueButton = screen.getByTestId('clique');

  expect(cliqueButton).toBeInTheDocument();
  expect(cliqueButton).toHaveTextContent('Clique'); // do texto dentro do componente
  expect(cliqueButton).toHaveValue(''); // da propriedade value
});
