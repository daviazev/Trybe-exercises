const express = require('express');

const app = express();

const activitiesRoutes = require('./routes/activitiesRoutes');
const signup = require('./routes/signup')

app.use(express.json());
// rotas

app.use('/activities', activitiesRoutes);
app.use('/signup', signup);

module.exports = app;
