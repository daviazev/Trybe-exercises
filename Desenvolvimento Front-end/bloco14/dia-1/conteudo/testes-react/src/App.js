import React, { Component } from 'react';
import ValidEmail from './components/ValidEmail';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className='App'>
        <label htmlFor='name-input'>
          Name
          <input
            id='name-input'
            type='text'
            placeholder='escreva seu nome :)'
          />
        </label>
        <label htmlFor='id-email'>
          Email
          <input
            onChange={(e) => this.changeEmail(e.target.value)}
            value={email}
            id='id-email'
            type='email'
            data-testid='email-input'
          />
        </label>
        <button value='Vírus grátis' data-testid='virus'>
          Vírus grátis
        </button>
        <button data-testid='clique'>Clique</button>
        <input
          data-testid='btn-send'
          id='btn-send'
          type='button'
          value='Enviar'
          onClick={() => this.changeSaveEmail(email)}
        />
        {/* <h2 data-testid='id-email-user'>{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={saveEmail} />
      </div>
    );
  }
}

export default App;
