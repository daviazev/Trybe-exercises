import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../redux/actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  signIn = () => {
    const { history, sign } = this.props;
    sign(this.state);
    history.push('/registered');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <header>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
        </header>
        <label htmlFor='input-email'>
          Email:
          <input
            value={email}
            name='email'
            id='input-email'
            type='email'
            placeholder='Digite seu email'
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor='input-email'>
          Senha:
          <input
            value={password}
            name='password'
            id='input-password'
            type='password'
            placeholder='Digite sua senha'
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.signIn}>Entrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sign: (payload) => dispatch(loginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
