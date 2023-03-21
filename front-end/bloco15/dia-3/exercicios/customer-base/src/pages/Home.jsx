import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/register'>
            <h3>Registre-se agora!</h3>
          </Link>
          <Link to='/login'>
            <h3>Login</h3>
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
