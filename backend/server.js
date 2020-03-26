const express = require('express');

const beneficiaryRouter = require('./model/beneficiary-router');

const server = express();

server.use(express.json());
server.use('/api/people', beneficiaryRouter);

module.exports = server;