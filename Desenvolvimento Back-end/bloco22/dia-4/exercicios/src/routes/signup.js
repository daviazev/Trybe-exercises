const express = require('express');
const router = express.Router();

const infoValidations = (req, res, next) => {
  const props = ['email', 'password', 'firstName', 'phone']

  if (props.every((prop) => prop in req.body)) {
    next();
  } else {
    res.status(401).json({ message: "Campos ausentes" })
  }
}

router.post('/', infoValidations, async (req, res) => {
  res.status(200).json({ message: "It works" })
})

module.exports = router;
