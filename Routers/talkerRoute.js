const express = require('express');

const router = express.Router();
const read = require('../controller/getAllTalker');
const findById = require('../controller/getTalkerById');

const tokenVal = require('../Midwares/tokenVal');
const nameVal = require('../Midwares/nameVal');
const ageVal = require('../Midwares/ageVal');
const talkVal = require('../Midwares/talkVal');
const talkContentVal = require('../Midwares/talkContentVal');

const createTalker = require('../controller/createTalker');
const editTalker = require('../controller/editTalker');
const deleteTalker = require('../controller/deleteTalker');
const searchTalker = require('../controller/searchTalker');

router.get('/', read);
router.get('/search', tokenVal, searchTalker);
router.get('/:id', findById);
router.post('/', tokenVal, nameVal, ageVal, talkVal, talkContentVal, createTalker);
router.put('/:id', tokenVal, nameVal, ageVal, talkVal, talkContentVal, editTalker);
router.delete('/:id', tokenVal, deleteTalker);

module.exports = router;