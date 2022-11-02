const express = require('express');
const generateToken = require('../utils/generateToken');
const router = express.Router();

const infoValidations = (req, res, next) => {
  const props = ['email', 'password', 'firstName', 'phone'];

  if (props.every((prop) => prop in req.body)) {
    next();
  } else {
    res.status(401).json({ message: "Campos ausentes" });
  }
}

router.post('/', infoValidations, async (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
})

module.exports = router;
