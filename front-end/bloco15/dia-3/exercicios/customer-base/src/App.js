import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/ClientesCadastrados';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/registered' component={RegisteredCustomers} />
      <Route path='/register' component={Register} />
    </Switch>
  );
}

export default App;
