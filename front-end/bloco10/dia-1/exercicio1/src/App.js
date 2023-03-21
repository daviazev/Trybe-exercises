// import logo from './logo.svg';
// import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
};

const compromissos = ['Acordar', 'Tomar café', 'Estudar', 'Estudar mais', 'Jogar', 'Dormir']

function App() {
  return (
    <ol>{compromissos.map((element) => Task(element))}</ol>
  );
}

export default App;
