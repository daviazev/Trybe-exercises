import React, { Component } from 'react';
import Input from './Inputs';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      haveShowAnAlert: true,
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
      resumoCurriculo: '',
      cargo: '',
    };
  }

  send = (event) => {
    event.preventDefault();
    // <Input type='text' placeholder='deuiwiuw' />;
    return <div>div criada no clique do botao</div>;
  };

  removeSpecialCharacter = (value) => {
    const teste = value.replace(/[^a-zA-Z0-9 ]/g, ''); // https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string
    this.setState({
      endereco: teste,
    });
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
    const isInt = Array.from(cidade[0]);
    const toInt = parseInt(isInt);

    if (!isNaN(toInt)) {
      this.setState({
        cidade: cidade.substring(1),
      });
    }
  };

  showAlert = () => {
    const { haveShowAnAlert } = this.state;
    if (haveShowAnAlert === true) {
      console.log('Preencha esta informação com cuidado');
      this.setState({
        haveShowAnAlert: false,
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
              placeholder='Digite seu nome'
              maxLength='40'
            />
            <Input
              handleChange={this.handleChange}
              value={email}
              name='email'
              type='email'
              placeholder='Email'
              maxLength='50'
            />
            <Input
              handleChange={this.handleChange}
              value={cpf}
              name='cpf'
              type='text'
              placeholder='CPF (somente números)'
              maxLength='11'
            />
            <Input
              handleChange={this.handleChange}
              value={endereco}
              name='endereco'
              type='text'
              placeholder='Endereço'
              maxLength='200'
            />
            <Input
              handleChange={this.handleChange}
              verifyIfStartsWithNumber={this.verifyIfStartsWithNumber}
              value={cidade}
              name='cidade'
              type='text'
              placeholder='Cidade'
              maxLength='28'
            />
            <Select
              name='estado'
              id='estado'
              value={estado}
              handleChange={this.handleChange}
            />
            <div value={moradia} onChange={this.handleChange}>
              <input type='radio' value='casa' name='moradia' /> Casa
              <input type='radio' value='apartamento' name='moradia' />{' '}
              Apartamento
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados do meu último emprego</legend>
            <h3>Resumo do currículo</h3>
            <textarea
              onChange={this.handleChange}
              name='resumoCurriculo'
              maxLength='1000'
              placeholder='Escreva seu resumo'
            ></textarea>
            <h3>Cargo</h3>
            <textarea
              onChange={this.handleChange}
              name='cargo'
              maxLength='40'
              placeholder='Descreva seu cargo'
              onMouseEnter={this.showAlert}
            ></textarea>
          </fieldset>
          <button onClick={this.send}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
