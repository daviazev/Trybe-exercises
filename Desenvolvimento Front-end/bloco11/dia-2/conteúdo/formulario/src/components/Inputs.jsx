import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const { handleChange } = this.props;
    console.log(handleChange);
    return (
      <input
        // value={value}
        name='inputText'
        id='text'
        type='text'
        onChange={handleChange}
      />
    );
  }
}

export default Inputs;
