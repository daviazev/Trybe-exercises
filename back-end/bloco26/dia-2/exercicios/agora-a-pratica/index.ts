import Car from './src/Car';
import Pizza from './src/Pizza';

import VegetarianPizza from './src/VegetarianPizza';
import SugarPizza from './src/SugarPizza';
import CommonPizza from './src/CommonPizza';

const gol = new Car('Volkswagem', 'prata', 4);

gol.speedUp();
gol.turn('left');
gol.speedUp();
gol.speedDown();
gol.turn('right');
gol.speedUp();
gol.speedDown();

// eu não fiz o resto desse exercício porque achei chato

const pizzaCalabresa: Pizza = {
  flavor: 'calabresa',
  slices: 4,
};

const pizzaMarguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6,
};

const pizzaNutela: Pizza = {
  flavor: 'nutela',
  slices: 4,
};

const calabresa: CommonPizza = {
  flavor: 'Calabresa',
  slices: 6,
};

console.log(calabresa);

const frango: CommonPizza = {
  flavor: 'Frango',
  slices: 8,
};

console.log(frango);

const peperoni: CommonPizza = {
  flavor: 'Peperoni',
  slices: 4,
};

console.log(peperoni);

const marguerita: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 8,
};

const Palmito: VegetarianPizza = {
  flavor: 'Palmito',
  slices: 4,
};

const nutela: SugarPizza = {
  flavor: 'Nutela',
  slices: 8,
};
