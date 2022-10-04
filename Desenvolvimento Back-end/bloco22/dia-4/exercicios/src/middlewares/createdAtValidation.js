// Crie um middleware de validação para a chave createdAt. Ela deve:

// Ter uma data válida no formato dd/mm/aaaa;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }.

// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }

// função que valida a data no formato dd/mm/aaaa
// não é a "melhor" forma de implementação, mas resolve por ora o problema :)
const dataValidation = (date) => {
  const array = date.split('/');

  if (array[0].length === 2 && array[1].length === 2 && array[2].length === 4) {
    return true;
  }

  return false;
};

const message = "O campo createdAt deve ter o formato 'dd/mm/aaaa'";

const createdAtValidation = (req, res, next) => {
  const { createdAt } = req.body.description;

  if (!createdAt || !dataValidation(createdAt)) {
    return res.status(400).json(message);
  }

  next();
};

module.exports = createdAtValidation;
