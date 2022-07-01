import React from 'react'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import AboutMe from './components/AboutMe'
import Profile from './components/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Route exact path="/about" component={About} />
      <Route path="/about/me"><AboutMe /></Route>
      <Route path="/contacts" component={Contacts} />
      <Route path="/profile"><Profile /></Route>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default App


// import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom';
// import './App.css'

// class App extends Component {
  
//   render() {
//     const ComponentePai = (props) => {
//       console.log(props);
//       return <div>{props.children}</div>
//     }
//     return(
//       <div className='main'>
//         <ComponentePai>
//           <h1>SUPIMPÃOZÃO</h1>
//           <h2>SUPIMPÃO</h2>
//           <h3>MÓ SUPIMPA</h3>
//           <h4>SUPIMPA</h4>
//           <h5>SUPIMPINHA</h5>
//           <h6>SUPIMPAZINHO</h6>
//         </ComponentePai>
//       </div>
//     );
//   }
// }

// export default App