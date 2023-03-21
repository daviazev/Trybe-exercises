// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SAO',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (_req, res) =>
  res.status(200).json({ message: 'Olá Mundo! xablau' }));

app.get('/helloworld', (_req, res) =>
  res.send('<h1>Olá Mundo!</h1>'));

app.get('/trybe', (_req, res) =>
  res.redirect('https://www.betrybe.com/'));

// app.get('/index', (_req, res) =>
//   res.render('./index.html'));

app.get('/teams', (_req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// Aqui, estamos trabalhando com método PUT, 
// o qual é utilizado quando queremos alterar um
//  recurso. Ele também recebe dados pelo corpo da requisição.

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

// Este trecho de código fui eu que fiz, e SOZINHOOOOOOOO!

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;

  const findTeamById = teams.find((team) => team.id === parseFloat(id));

  res.status(200).json({ result: findTeamById });
});

// O TRECHO ACIMA FOI EU QUEM FIZ AAAAAAAAAAAAAAAAAAAAAAAAAAA

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);
  res.status(200).end();
});

module.exports = app;
