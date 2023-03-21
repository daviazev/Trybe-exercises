import React, { Component } from "react";

class RandomUser extends Component {
  constructor() {
    super()

    this.state = {
        loading: true,
        person: [],
    };
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.person[0].dob.age > 50) return false;
    return true
  }

  async componentDidMount() {
    try {
        console.log('componentDidMount');
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const dataJson = await response.json();
        this.setState({ 
            loading: false,
            person: dataJson.results,
        })
        console.log(dataJson.results);
    } catch (error) {
        console.log(error);
    }
  }

  render() {
    const { person, loading } = this.state;
    if (loading) return <span>Loading...</span>
    return (
      <div>
        {person.map(({ picture, gender, email, name, dob, nat, phone }) => {
            return (
              <div key={name.first}>
                <img src={picture.large} alt={name.first}/>
                <h1>{name.title} {name.first} {name.last}</h1>
                <p>{gender}</p>
                <p>{email}</p>
                <p>{dob.age}</p>
                <p>{nat}</p>
                <p>{phone}</p>
              </div>
            )
        })}
      </div>
    )
  }
}

export default RandomUser;
