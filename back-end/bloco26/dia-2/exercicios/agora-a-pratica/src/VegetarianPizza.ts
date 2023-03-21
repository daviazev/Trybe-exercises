import Pizza from './Pizza';

import { Vegetarian } from './pizzaFlavorsTypes';

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
}

export default VegetarianPizza;
