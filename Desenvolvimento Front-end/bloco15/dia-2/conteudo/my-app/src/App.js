import logo from './logo.svg';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
// import myReducer from './reducers/myReducer';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <FirstComponent /> */}
      <SecondComponent />
      <img src={logo} alt='react-logo' />
    </div>
  );
}

export default App;
