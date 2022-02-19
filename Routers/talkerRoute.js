const express = require('express');

const router = express.Router();
const read = require('../controller/getAllTalker');
const findById = require('../controller/getTalkerById');

// router.get('/', read, findById);
router.get('/', read);
router.get('/:id', findById);

module.exports = router;