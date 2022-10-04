// Crie um middleware de validação para a chave price. Ela deve:

// Ser obrigatória;

// Retornar o status 400 e uma mensagem em formato json;

// Sugestão: { "message": "O campo price é obrigatório" }.
// Ser um número maior ou igual a zero;

// Retornar o status 400 e uma mensagem em formato json;

// Sugestão: { "message": "O campo price deve ser um número maior ou igual a zero" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

const msg1 = 'O campo price é obrigatório';
const msg2 = 'O campo price deve ser um número maior ou igual a zero';
const msg3 = 'O valor do campo price deve ser um número';

const priceValidation = (req, res, next) => {
  const props = ['price'];
  const { price } = req.body;

  if (!props.every((property) => property in req.body)) {
    return res.status(400).json({ message: msg1 });
  } else if (price < 0) {
    return res.status(400).json({ message: msg2 });
  } else if (typeof price === 'string') {
    return res.status(400).json({ message: msg3 });
  } else {
    next();
  }
};

module.exports = priceValidation;
