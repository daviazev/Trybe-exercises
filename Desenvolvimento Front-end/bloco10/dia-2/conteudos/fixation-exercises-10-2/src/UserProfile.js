// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.user.name} </h2>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText='User avatar' />
      </div>
    );
  }
}

export default UserProfile;
