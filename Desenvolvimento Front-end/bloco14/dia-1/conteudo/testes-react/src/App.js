// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <label>
        Name
        <input type='text' placeholder='escreva seu nome :)' />
      </label>
      <button value='Vírus grátis' data-testid='virus'>
        Vírus grátis
      </button>
      <button data-testid='clique'>Clique</button>
    </div>
  );
}

export default App;
