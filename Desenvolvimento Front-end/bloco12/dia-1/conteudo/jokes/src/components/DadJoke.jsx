import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.fetchJoke = this.fetchJoke.bind(this);

    console.log('constructor');

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
    async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      });
    });
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.fetchJoke();
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    // console.log('render');
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <div className='span-div'><span>Loading...</span></div>;

    return (
      <div>
        <h1>Piadas</h1>
        <h3>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </h3>

      {

        loading ? loadingElement : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;

// como fazer a função de um "loading..."

// this.setState(
//   (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
//   () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
// )