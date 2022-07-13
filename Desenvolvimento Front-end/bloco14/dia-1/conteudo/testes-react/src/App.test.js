import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('verifica se tem um input na tela', () => {
  render(<App />);

  const inputName = screen.getByLabelText('Name');

  expect(inputName).toBeInTheDocument();
  expect(inputName.type).toBe('text');
});

it('Verifica se há dois botões na tela', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(3);
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

it('Verifica se existe o input de Email na tela', () => {
  render(<App />);

  const labelEmail = screen.getByLabelText('Email');

  expect(labelEmail).toBeInTheDocument();
  // expect(labelEmail).toHaveTextContent('Email'); // do texto dentro do componente
  expect(labelEmail).toHaveValue(''); // da propriedade value
  expect(labelEmail).toHaveProperty('type', 'email'); // trata das propriedades
  expect(labelEmail).toHaveProperty('id', 'id-email'); // toHaveProperty(propriedade, valor)
});

it('Verifica um botão', () => {
  render(<App />);

  const button = screen.getByTestId('btn-send');

  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button');
  expect(button).toHaveValue('Enviar');
});

it('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'simplesmenteoemaildoentretenimento@test.sem.seila';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('btn-send');
  const inputEmail = screen.getByLabelText('Email');

  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

it('Verifica um input pelo placeholder', () => {
  render(<App />);

  const inputByPlaceholder = screen.getByPlaceholderText('escreva seu nome :)');

  expect(inputByPlaceholder).toBeInTheDocument();
});
