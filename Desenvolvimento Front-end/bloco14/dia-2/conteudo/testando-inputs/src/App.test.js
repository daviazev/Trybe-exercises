// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testando inputs', () => {
  test('alterando o valor dos campos e testando o valor guardado', () => {
    render(<App />);

    const inputName = screen.getByRole('textbox', { name: /nome/i });
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'eu escrevo o que eu quiser aqui');
    expect(inputName).toHaveValue('eu escrevo o que eu quiser aqui');

    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'legal@kkkkk.ahusuahushua');
    expect(inputEmail).toHaveValue('legal@kkkkk.ahusuahushua');
  });
});
