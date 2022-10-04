// os requires são relativos ao arquivo, então o path muda ligeiramente
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');
const existingId = require('../middlewares/existingId')

const teams = require('../data/teams')
// cria um router middleware
const express = require('express')
const router = express.Router();

let nextId = 3;

// o path é relativo à rota em que o router foi montado (2)
router.get('/', (req, res) => res.json(teams));

// configurações globais afetam apenas este router (3)
router.use(apiCredentials);

// refatorado, agora a validação fica no middleware existingId
// e passa a usar o routes
router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
// e passa a usar o routes
router.post('/', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

// refatorado, agora a validação fica no middleware existingId
// e passa a usar o routes
router.put('/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

// refatorado, agora a validação fica no middleware existingId
// e passa a usar o routes
router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});

module.exports = router;