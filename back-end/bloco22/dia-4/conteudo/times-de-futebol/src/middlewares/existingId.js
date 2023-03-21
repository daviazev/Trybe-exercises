const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;

  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res
      .status(404)
      .json({ error: 'o id não corresponde a nenhum clube da base de dados' });
  }
};

module.exports = existingId;
