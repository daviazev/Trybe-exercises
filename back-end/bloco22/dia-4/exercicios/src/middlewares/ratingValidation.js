// Crie um middleware de validação para a chave rating. Ela deve:

// Ter um número inteiro entre 1 e 5;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo rating
// deve ser um número inteiro entre 1 e 5" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

const message = 'O campo rating deve ser um número inteiro entre 1 e 5';

const ratingValidation = (req, res, next) => {
  const { rating } = req.body.description;

  if (!rating || !(rating >= 1 && rating <= 5)) {
    return res.status(400).json({ message });
  }

  next();
};

module.exports = ratingValidation;
