const express = require('express');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

const validateById = (req, res, next) => {
  const { id } = req.params;

  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res
      .status(404)
      .json({ error: 'o id não corresponde a nenhum clube da base de dados' });
  }
};

// refatorado, agora a validação fica no middleware validateById
app.get('/teams/:id', validateById, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

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

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

// refatorado, agora a validação fica no middleware validateById
app.put('/teams/:id', validateById, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((team) => team.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

// refatorado, agora a validação fica no middleware validateById
app.delete('/teams/:id', validateById, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});

// PARA FIXAR

// 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro
// na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

// 🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.

module.exports = app;
