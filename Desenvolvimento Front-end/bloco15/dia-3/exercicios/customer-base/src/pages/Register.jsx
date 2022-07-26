import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../redux/actions';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      users: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { saveCustomers } = this.props;
    const { name, age, email } = this.state;
    this.setState((prev) => ({
      users: [...prev.users, { name, age, email }],
    }));

    // const { users } = this.state;

    // console.log({ users: this.state });

    saveCustomers({ name, age, email });

    // history.push('./login');
  };

  render() {
    return (
      <div>
        <Link to='/registered'>
          <h3>Clientes cadastrados</h3>
        </Link>
        <Link to='/login'>
          <h3>Faça login!</h3>
        </Link>
        <h1>Registre-se aqui!</h1>
        <label htmlFor='input-name'>
          Nome:
          <input
            onChange={this.handleChange}
            name='name'
            type='text'
            placeholder='Seu nome'
            id='input-name'
          />
        </label>
        <label htmlFor='input-name'>
          Idade:
          <input
            onChange={this.handleChange}
            name='age'
            type='text'
            placeholder='Sua idade'
            id='input-age'
          />
        </label>
        <label htmlFor='input-name'>
          Email:
          <input
            onChange={this.handleChange}
            name='email'
            type='email'
            placeholder='Seu email'
            id='input-email'
          />
        </label>
        <button type='button' onClick={this.handleClick}>
          ME ADICIONE
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveCustomers: (arrayOfCustomers) =>
    dispatch(registerAction(arrayOfCustomers)),
});

export default connect(null, mapDispatchToProps)(Register);
