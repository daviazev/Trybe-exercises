//index.ts
import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.0);
const juice = new OrderItem('Suco de Abacaxi', 5.0);
const dessert = new OrderItem('Gelatina de Uva', 2.5);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.1);

console.log(order);
