// src/experimento-json.js

// PARA VER ESTE EXEMPLO RODANDO, RODE O SEGUINTE COMANDO: node src/experimento-json.js

const express = require('express');
const app = express();

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });