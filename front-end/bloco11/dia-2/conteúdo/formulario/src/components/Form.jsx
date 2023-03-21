import React, { Component } from 'react';
import Inputs from './Inputs';
import Textarea from './Textarea';

// class Form extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       estadoFavorito: '',
//     };
//   }

//   handleChange(event) {
//     this.setState({
//       estadoFavorito: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
//         </h1>
//         <form className='form'>
//           <label>
//             Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
//             <textarea
//               name='estadoFavorito'
//               value={this.state.estadoFavorito}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type='number' name='idade' />
//           <input type='checkbox' name='vaiComparecer' />
//         </form>
//       </div>
//     );
//   }
// }

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selected: '',
      inputText: '',
      inputNumber: 0,
      textarea: '',
      checkbox: false,
      //   file: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { selected, inputText, inputNumber, textarea } = this.state;
    return (
      <div>
        <form>
          <select onChange={this.handleChange} value={selected} name='selected'>
            <option>Eu sou o seu pai</option>
            <option>Bazinga</option>
            <option>Bazinga de novo, eu sou kkkkk</option>
          </select>
          {/* <input
            onChange={this.handleChange}
            value={inputText}
            name='inputText'
            id='text'
            type='text'
          /> */}
          <Inputs handleChange={this.handleChange} value={inputText} />
          <input
            name='inputNumber'
            id='number'
            type='number'
            value={inputNumber}
            onChange={this.handleChange}
          />
          <label htmlFor='textarea'>
            {/* <textarea
              name='textarea'
              id='textarea'
              cols='30'
              rows='10'
              onChange={this.handleChange}
              value={textarea}
            ></textarea> */}
            <Textarea handleChange={this.handleChange} value={textarea} />
            <input
              onChange={this.handleChange}
              value={textarea}
              name='checkbox'
              type='checkbox'
            />
          </label>
          {/* <input name='file' type='file' /> */}
        </form>
      </div>
    );
  }
}

export default Form;
