const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];

  // ele só entratá no if se o objeto da requisição tiver cada propriedade
  // que pode ser encontrada em requiredProperties logo acima :)

  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

module.exports = validateTeam;
