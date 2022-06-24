import React, { Component } from 'react';
import Input from './Inputs';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
    };
  }

  send = (event) => {
    event.preventDefault();
  };

  removeSpecialCharacter = (value) => {
    const teste = value.replace(/[^a-zA-Z0-9 ]/g, ''); // https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string
    this.setState({
      endereco: teste,
    });
    console.log(value);
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });

    if (name === 'endereco') {
      this.removeSpecialCharacter(value);
    }
  };

  verifyIfStartsWithNumber = () => {
    const { cidade } = this.state;
    if (typeof parseInt(cidade[0]) === 'number') {
      this.setState({
        cidade: cidade.substring(1),
      });
    }
  };

  render() {
    const { name, email, cpf, endereco, cidade, estado, moradia } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Currículo</legend>
            <div>Nome</div>
            <Input
              handleChange={this.handleChange}
              value={name}
              name='name'
              type='text'
              placeholder='um input muito louco'
              maxLength='5'
            />
            {/* <input
              value={name.toUpperCase()}
              onChange={this.handleChange}
              name='name'
              type='text'
              placeholder='Digite seu nome'
              maxLength='40'
              required
            /> */}
            <input
              value={email}
              onChange={this.handleChange}
              name='email'
              type='email'
              placeholder='Email'
              maxLength='50'
              required
            />
            <input
              value={cpf}
              onChange={this.handleChange}
              name='cpf'
              type='number'
              placeholder='CPF'
              required
            />
            <input
              value={endereco}
              onChange={this.handleChange}
              name='endereco'
              type='text'
              placeholder='Endereço'
              maxLength='200'
              required
            />
            <input
              value={cidade}
              onChange={this.handleChange}
              onBlur={this.verifyIfStartsWithNumber}
              name='cidade'
              type='text'
              placeholder='Cidade'
              maxLength='28'
              required
            />
            <select name={estado} id='estado' required>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Bahia</option>
              <option>Minas Gerais</option>
              <option>Maranhão</option>
              <option>Acre</option>
              <option>Paraná</option>
            </select>
            <div value={moradia} onChange={this.handleChange}>
              <input type='radio' value='casa' name='moradia' /> Casa
              <input type='radio' value='apartamento' name='moradia' />{' '}
              Apartamento
            </div>
            <button onClick={this.send}>Enviar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
