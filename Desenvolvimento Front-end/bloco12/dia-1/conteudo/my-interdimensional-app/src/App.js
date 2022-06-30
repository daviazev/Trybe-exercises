// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = { characters: [] }
  }

  // fazer com async e await depois

  componentDidMount() {
    this.fetchCharacters()
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
     .then(response => response.json())
     .then(data => {
      this.setState({characters: data.results})
     })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image, id }) => {
            console.log(id);
            return (
              <div className="container" key={id}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
