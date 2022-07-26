import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends Component {
  render() {
    const { email, password, usersRegistereds } = this.props;
    console.log(usersRegistereds);
    if (!email && !password) {
      return (
        <div>
          <h1>Login não efetuado!!!</h1>
          <Link to='/login'>Faça seu login aqui!</Link>
        </div>
      );
    }

    if (email && password && !usersRegistereds.length) {
      return (
        <div>
          <h1>Nenhum cliente cadastrado!</h1>
          <Link to='/register'>
            <h3>Ir à página de cadastros!</h3>
          </Link>
        </div>
      );
    }

    return (
      <div>
        <h1>Clientes cadastrados</h1>
        {usersRegistereds.map(({ name, age, email }) => {
          return (
            <div className='customers' key={email}>
              <h3>{name}</h3>
              <h3>{age}</h3>
              <h3>{email}</h3>
            </div>
          );
        })}
        <Link to='/register'>
          <h3>Ir à página de cadastros!</h3>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.loginReducer.user.email,
  password: store.loginReducer.user.password,

  usersRegistereds: store.registerReducer.usersRegistereds,
});

export default connect(mapStateToProps)(RegisteredCustomers);
