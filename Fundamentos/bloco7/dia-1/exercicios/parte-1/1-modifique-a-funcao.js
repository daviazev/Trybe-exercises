
// const testingScope = (escopo) => {
// }

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo! e detalhe: com template literals :D`;
      console.log(ifScope);
    } else {
       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

  testingScope(true);