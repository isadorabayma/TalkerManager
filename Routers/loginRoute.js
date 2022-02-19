const express = require('express');

const router = express.Router();
const createTalker = require('../controller/createTalker');
const emailVal = require('../Midwares/emailVal');
const passwordVal = require('../Midwares/passwordVal');

// router.post('/', createTalker);
router.post('/', emailVal, passwordVal, createTalker);

module.exports = router;