import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>HELLO WORLD</h1>
        <a
          className='App-link'
          href='https://app.betrybe.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Redux and React!
        </a>
      </header>
    </div>
  );
}

export default App;
