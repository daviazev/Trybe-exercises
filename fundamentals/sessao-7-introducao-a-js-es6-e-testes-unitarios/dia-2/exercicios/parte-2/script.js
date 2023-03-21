// Para os exercícios a seguir, use o seguinte código.

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};
  
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const houseNumber = order.address.number;
  const apNumber = order.address.apartment;
  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N: ${houseNumber}, AP: ${apNumber}.`;
}
console.log(customerInfo(order));

console.log('-----------------------------------------------');

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  const peperoniValue = order.order.pizza.marguerita.price = 20;
  const total = peperoniValue + order.order.pizza.pepperoni.price + order.order.drinks.coke.price;
  const drink = order.order.drinks.coke.type;
  console.log(`Olá ${name}, o total do seu pedido de marguerita, peperoni e ${drink} é de R$ ${total},00.`);
}

orderModifier(order);

//  Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// Modifique o nome da pessoa compradora.

// Modifique o valor total da compra para R$ 50,00.
