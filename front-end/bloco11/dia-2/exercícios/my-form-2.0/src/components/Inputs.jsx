import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      verifyIfStartsWithNumber,
      handleChange,
      name,
      type,
      placeholder,
      maxLength,
      value,
    } = this.props;
    // console.log(name);
    return (
      <input
        onBlur={verifyIfStartsWithNumber}
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required
      />
    );
  }
}

export default Input;
