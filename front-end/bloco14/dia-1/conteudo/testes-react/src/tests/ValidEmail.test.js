import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

it('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

it('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'email_emailtop.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
