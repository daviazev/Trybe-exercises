import React from 'react';
import './App.css';

// const sendMessage1 = () => console.log('Thor and Doctor Jones, Thor and Doctor Jones');
// const sendMessage2 = () => console.log('One plays with lightning');
// const sendMessage3 = () => console.log('The other plays with bones');

class App extends React.Component {

  constructor(props) {
     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
     super();
     // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
     this.sendMessage1 = this.sendMessage1.bind(this);
     this.sendMessage2 = this.sendMessage2.bind(this);
     this.sendMessage3 = this.sendMessage3.bind(this);

      /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/

    this.state = {
      cliqueBtn1: 0,
      cliqueBtn2: 0,
      cliqueBtn3: 0
    }
  }

  sendMessage1() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    console.log('Thor and Doctor Jones, Thor and Doctor Jones');

    this.setState((estadoAnterior, _props) => ({
      cliqueBtn1: estadoAnterior.cliqueBtn1 + 1
    }))
  }

  sendMessage2() {
    console.log('One plays with lightning');
    // Essa chamada ao `this` retorna `undefined`? !
    this.setState((estadoAnterior, _props) => ({
      cliqueBtn2: estadoAnterior.cliqueBtn2 + 1
    }))
  }

  sendMessage3() {
    console.log('The other plays with bones');
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this);

    this.setState((estadoAnterior, _props) => ({
      cliqueBtn3: estadoAnterior.cliqueBtn3 + 1
    }))
  }

  render () {
        /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    console.log(this);
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
      <>
        <button key={1} onClick={this.sendMessage1}>Foi clicado {this.state.cliqueBtn1} vezes</button>
        <button key={2} onClick={this.sendMessage2}>Foi clicado {this.state.cliqueBtn2} vezes</button>
        <button key={3} onClick={this.sendMessage3}>Foi clicado {this.state.cliqueBtn3} vezes</button>
      </>
    )
  };
}

export default App;
