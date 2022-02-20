const express = require('express');

const router = express.Router();
const read = require('../controller/getAllTalker');
const findById = require('../controller/getTalkerById');

// const tokenVal = require('../Midwares/tokenVal');
const nameVal = require('../Midwares/nameVal');
const ageVal = require('../Midwares/ageVal');
const createTalker = require('../controller/createTalker');

router.get('/', read);
router.get('/:id', findById);
// router.post('/', tokenVal, createTalker);
router.post('/', nameVal, ageVal, createTalker);

module.exports = router;