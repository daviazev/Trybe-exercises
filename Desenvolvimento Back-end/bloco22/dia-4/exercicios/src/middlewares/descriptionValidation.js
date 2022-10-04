// Crie um middleware de validação para a chave description
//  que possui as chaves createdAt, rating e difficulty. Ela deve:

// Ter todas as chaves obrigatórias;
// Retornar o status 400 para todas e uma mensagem em formato json;
// Sugestão: { "message": "O campo description é obrigatório" };
// Sugestão: { "message": "O campo createdAt é obrigatório" };
// Sugestão: { "message": "O campo rating é obrigatório" };
// Sugestão: { "message": "O campo difficulty é obrigatório" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

const msg1 = 'Há campos faltando. Por favor, prencha todos!';

const descriptionValidation = (req, res, next) => {
  const requiredProperties = ['rating', 'difficulty', 'createdAt'];
  if (
    !requiredProperties.every((property) => property in req.body.description)
  ) {
    return res.status(400).json({ message: msg1 });
  } else {
    next();
  }
};

module.exports = descriptionValidation;
