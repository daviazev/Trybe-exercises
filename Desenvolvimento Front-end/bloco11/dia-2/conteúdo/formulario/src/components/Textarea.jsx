import React from 'react';

class Textarea extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <textarea
        name='textarea'
        id='textarea'
        cols='30'
        rows='10'
        onChange={handleChange}
      ></textarea>
    );
  }
}

export default Textarea;

// <textarea onChange={this.handleChange} value={textarea}></textarea>;
