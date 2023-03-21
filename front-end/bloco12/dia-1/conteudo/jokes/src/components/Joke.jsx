import React, { Component } from "react";

class Joke extends Component {
  render() {
    const { jokeObj, saveJoke } = this.props;
    return (
      <div>
        <div className="new-joke">
            <h2>{jokeObj.joke}</h2>
        </div>
        <div className="div-button">
        <button type="button" onClick={saveJoke}>
          Bazinga!
        </button>
        </div>
      </div>
    )
  }
}

export default Joke;
