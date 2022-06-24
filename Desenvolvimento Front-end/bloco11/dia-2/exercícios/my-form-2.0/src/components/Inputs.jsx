import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleChange, name, type, placeholder, maxLength, value } =
      this.props;
    return (
      <input
        value={name}
        onClick={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    );
  }
}

export default Input;
