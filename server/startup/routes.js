const Department = require('../routes/department');
const express = require('express');

module.exports = app => {
  
  app.use(express.json());
  
  app.use('/api/v1/department', Department);

}