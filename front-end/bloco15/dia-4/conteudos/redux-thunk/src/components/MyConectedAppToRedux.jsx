import React, { Component } from 'react';

class MyConectedAppToRedux extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }

  render() {
    return (
      <div>
        <h1> MyConectedAppToRedux </h1>
      </div>
    );
  }
}

export default MyConectedAppToRedux;
