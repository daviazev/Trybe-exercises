import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class PokeList extends Component {
  render() {
    return (
      <div className='pokedex'>
        {pokemons.map((pokemon) => {
          return <Pokemon dataItem={pokemon} key={pokemon.id} />;
        })}
      </div>
    );
  }
}

export default PokeList;
