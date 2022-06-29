import React, { Component } from 'react';

class Select extends Component {
  render() {
    const brazilStates = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espirito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];

    const { name, id, value, handleChange } = this.props;
    return (
      <select name={name} id={id} value={value} onChange={handleChange}>
        {brazilStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
