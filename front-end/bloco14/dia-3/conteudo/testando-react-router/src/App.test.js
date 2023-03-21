import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';


describe('testando elementos com a função renderWithRouter', () => {
  test('deve renderizar o componente App', () => {
    renderWithRouter(<App />)
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início'
    })
    expect(homeTitle).toBeInTheDocument();
  });
  
  test('deve renderizar o componente About', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' })
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about')
  
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
  
    expect(aboutTitle).toBeInTheDocument();
  })

  test('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
  
  test('deve renderizar apenas o componente About', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: /você está na página sobre/i
    })

    expect(aboutTitle).toBeInTheDocument();
  })
})
