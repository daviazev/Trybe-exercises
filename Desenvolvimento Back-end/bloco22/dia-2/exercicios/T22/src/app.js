const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

  // Crie um endpoint do tipo GET com a rota 
  // /myActivities/:id, que possa listar uma atividade do array por id 🚀

  app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;

    const obj = activities.find((object) => object.id === parseFloat(id));

    res.status(200).json(obj);
  });

  // Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array

  app.get('/myActivities', (_req, res) => {
    res.status(200).json({ results: activities });
  });

  // Crie um endpoint do tipo GET com a rota /filter/myActivities,
  // que possa listar todas as atividades filtradas por status do array.

  app.get('/filter/myActivities', (_req, res) => {
    const todo = activities.filter((obj) => obj.status === 'A fazer');
    const done = activities.filter((obj) => obj.status === 'Feito');

    res.status(200).json({ todo, done });
  });

  module.exports = app;
