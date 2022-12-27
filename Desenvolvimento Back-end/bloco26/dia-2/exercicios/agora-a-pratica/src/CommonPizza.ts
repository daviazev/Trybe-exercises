import Pizza from './Pizza';

import { Common } from './pizzaFlavorsTypes';

interface CommonPizza extends Pizza {
  flavor: Common;
}

export default CommonPizza;
