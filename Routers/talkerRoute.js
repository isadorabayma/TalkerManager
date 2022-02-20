const express = require('express');

const router = express.Router();
const read = require('../controller/getAllTalker');
const findById = require('../controller/getTalkerById');

// const tokenVal = require('../Midwares/tokenVal');
const createTalker = require('../controller/createTalker');

router.get('/', read);
router.get('/:id', findById);
// router.post('/', tokenVal, createTalker);
router.post('/', createTalker);

module.exports = router;