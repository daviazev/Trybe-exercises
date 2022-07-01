import React, { Component } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

class Home extends Component {
  render() {
   return(
    <div>
      <h1>Componente Home</h1>
      <Link to="/about">About</Link>
    </div>
   );
  }
}

export default Home;
