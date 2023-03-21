// Crie um middleware de validação para a chave difficulty. Ela deve:

// Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

const message = "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'";

const difficultyValidation = (req, res, next) => {
  const { difficulty } = req.body.description;

  if (
    difficulty === 'Fácil' ||
    difficulty === 'Médio' ||
    difficulty === 'Difícil'
  ) {
    return next();
  }

  return res.status(200).json({ message });
};

module.exports = difficultyValidation;
