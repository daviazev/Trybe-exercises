// Este arquivo ficou grande porque eram vários testes a serem feitos.

/*

import './App.css';
import Image from './Image';
const imageCat =
  'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

function App() {
  return (
    <main>
      <Image source={imageCat} alternativeText={'Cute cat staring'} />;
    </main>
  );
}

export default App;

src / App.js;

import React from 'react';

*/

/*

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital',
      },
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital',
      },
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={album01.image} alt={album01.title} />
          <h2>{album01.title}</h2>
          <p>Lançamento: {album01.releaseDate.year}</p>
          <p>Gravadora: {album01.others.recordCompany}</p>
          <p>Formatos: {album01.others.formats}</p>
        </section>
        <section>
          <img src={album02.image} alt={album02.title} />
          <h2>{album02.title}</h2>
          <p>Lançamento: {album02.releaseDate.year}</p>
          <p>Gravadora: {album02.others.recordCompany}</p>
          <p>Formatos: {album02.others.formats}</p>
        </section>
      </article>
    );
  }
}

export default App;

*/

// Como você deve ter notado, o código, apesar de conter pouca lógica, está extenso. Ambas as sections, apesar de possuirem estruturas semelhantes, renderizam informações diferentes. Imagine o tamanho do código se tivéssemos cinco albuns. Ou dez? Percebe-se que, nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável, dando início à nossa refatoração. Para isso, vamos criar um novo arquivo, chamado Album.js, para armazenar o código das sections e adaptá-lo para fazer a leitura das props que iremos passar futuramente:

/*

import React from 'react';
import Album from './Album';

class App extends React.Component {
  render() {
    const album01 = {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital',
      },
    };

    const album02 = {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital',
      },
    };

    return (
      <div>
        <Album album={album01} />
        <Album album={album02} />
      </div>
    );
  }
}

export default App;

*/

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
      },
      {
        id: 73,
        name: 'Davi',
        email: 'davi@gmail.com',
        avatar: 'https://avatars.githubusercontent.com/u/89483108?v=4',
      },
    ];

    return (
      <div className='App'>
        {users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default App;

/*
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars',
      },
    };

    const energyDrink = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars',
      },
    };

    return (
      <div className='App'>
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;

*/

/*
import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App;

*/
