const container = document.getElementById('first');
const container2 = document.getElementById('second');

function createDivElement(classes) {
  const newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv;
}

container.appendChild(createDivElement('yellow small circle'));
container.appendChild(createDivElement('green small circle'));
container.appendChild(createDivElement('red medium circle'));

const circleRed = container.lastElementChild;

container.removeChild(circleRed);

document.body.prepend(circleRed);

const cores = ['green', 'red', 'yellow'];
const tamanhos = ['small', 'medium', 'big'];
const formas = ['circle', 'square'];
for (let index = 0; index < 2; index += 1) {
  const posicao = Math.floor(Math.random() * cores.length);
  const cor = cores[posicao];
  const umaDiv = createDivElement(cor + ' small circle');
  container2.appendChild(umaDiv);
}

// TAREFA PARA CASA
// 1. Colocar as formas aleatórias
// 2. Colocar tamanhos aleatórios

// Funções vistas hoje:

// createElement;
// appendChild;
// removeChild;
// parentNode;
// childNodes;
// children;
// firstChild;
// firstElementChild;
// lastChild;
// lastElementChild;
// nextSibling
// nextElementSibling;
// previousSibling
// previousElementSibling;