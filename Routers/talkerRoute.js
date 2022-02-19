const express = require('express');

const router = express.Router();
const read = require('../controller/getAllTalker');
const findById = require('../controller/getTalkerById');

router.get('/', read, findById);

module.exports = router;