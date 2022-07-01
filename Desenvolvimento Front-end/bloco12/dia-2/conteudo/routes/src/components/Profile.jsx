import React, { Component } from "react";

class Profile extends Component {
  render() {
  const { ship } = this.props.match.params;
   return(
    <div>
      <h1>Componente Profile</h1>
      <h2>Meu perfil: {this.props.name}, { ship }</h2>
    </div>
   );
  }
}

export default Profile;