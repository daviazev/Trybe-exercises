import Pizza from './Pizza';

import { Sugar } from './pizzaFlavorsTypes';

interface SugarPizza extends Pizza {
  flavor: Sugar;
}

export default SugarPizza;
