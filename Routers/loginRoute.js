const express = require('express');

const router = express.Router();
const login = require('../controller/login');
const emailVal = require('../Midwares/emailVal');
const passwordVal = require('../Midwares/passwordVal');

// router.post('/', createTalker);
router.post('/', emailVal, passwordVal, login);

module.exports = router;