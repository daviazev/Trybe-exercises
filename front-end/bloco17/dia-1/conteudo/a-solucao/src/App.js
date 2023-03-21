import React, { Component } from 'react';

// Observe que agora Father e Daughter não recebem props. Daughter acessa o estado diretamente, utilizando um Consumer. Sem mais prop drilling!

// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!

const FamilyContext = React.createContext(999999999);

export default class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    };
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({
      inheritance: prevState.inheritance - 1000,
    }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance,
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  // nao recebe prop de PROPósito
  return <Father />;
}

function Father(props) {
  // nao recebe prop de PROPósito
  return <Daughter />;
}

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {(value) => (
        <div>
          <p>{`Tenho ${value.inheritance} pra gastar`}</p>
          <button onClick={value.spendInheritance}>Gastar</button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}

// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!
// Sem mais prop drilling!
