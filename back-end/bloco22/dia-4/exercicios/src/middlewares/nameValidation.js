// Crie um middleware de validação para a chave name. Ela deve:

// Ser obrigatória;

// Retornar o status 400 e uma mensagem em formato json;

// Sugestão: { "message": "O campo name é obrigatório" }.
// Ter mais de 4 caracteres;

// Retornar o status 400 e uma mensagem em formato json;

// Sugestão: { "message": "O campo name deve ter pelo menos 4 caracteres" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

const nameValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length < 4) {
    res
      .status(400)
      .json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  } else {
    next();
  }
};

module.exports = nameValidation;
