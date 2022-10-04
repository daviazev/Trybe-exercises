const express = require('express');

const app = express();

const activitiesRoutes = require('./routes/activitiesRoutes');

app.use(express.json());
// rotas
app.use('/activities', activitiesRoutes);

module.exports = app;
