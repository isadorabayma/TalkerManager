const express = require('express');

const router = express.Router();
const createTalker = require('../controller/createTalker');
const { emailVal, passwordVal } = require('../Midwares/loginValidation');

router.post('/', createTalker);

module.exports = router;