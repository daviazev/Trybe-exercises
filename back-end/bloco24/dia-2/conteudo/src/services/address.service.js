// src/services/address.service.js

const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  console.log('>>>>>', employeeId);
  const addresses = await Address.findAll({
    where: { employeeId },
    attributes: { exclude: ['number'] },
  });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
};
