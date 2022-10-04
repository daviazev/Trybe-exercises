const express = require('express');
const router = express.Router();

// /activities

const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const createdAtValidation = require('../middlewares/createdAtValidation');
const ratingValidation = require('../middlewares/ratingValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');

router.post(
  '/',
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
  (req, res) => {
    const message = 'Atividade cadastrada com sucesso!';
    res.status(201).json({ message });
  }
);

module.exports = router;
