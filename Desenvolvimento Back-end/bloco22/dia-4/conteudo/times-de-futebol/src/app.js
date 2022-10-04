const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const morgan = require('morgan');
const cors = require('cors');

const teams = require('./data/teams');
require('express-async-errors'); // esse carinha é importante kkkkkkkkk
const app = express();
app.use(morgan('dev'));

const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;

app.use(cors());
app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

// refatorado, agora a validação fica no middleware existingId
app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla) &&
    // confere se já não existe um time com essa sigla
    teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.sendStatus(401);
  }
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

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

// PARA FIXAR

// 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro
// na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

// 🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.

// 🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js,
// mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.

module.exports = app;
