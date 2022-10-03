const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

const teams = require('./data/teams');

const app = express();

let nextId = 3;

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

// refatorado, agora a validação fica no middleware existingId
app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

// refatorado, agora a validação fica no middleware existingId
app.put('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((team) => team.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

// refatorado, agora a validação fica no middleware existingId
app.delete('/teams/:id', existingId, (req, res) => {
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

// 🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js,
// mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.

module.exports = app;
