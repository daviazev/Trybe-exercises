import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Era pra fazer isso aqui',
    bloco: 'fiz no bloco 10',
    status: 'ficou feio, mas é trabalho honesto',
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((element) => {
      return (
        <div className='Div-father'>
          <div className='div' key={element.conteudo}>
            <p>O conteúdo é: {element.conteudo}</p>
            <p>Status: {element.status}</p>
            <p>Bloco: {element.bloco}</p>
          </div>
        </div>
      );
    });
  }
}
export default Content;
